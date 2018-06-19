import { PubSub } from "graphql-subscriptions"
import moment from "moment"

import { Group, Match, MatchAction } from "../models"

export const pubSub = new PubSub()
export const foulActions = ["foul"]
export const scoreActions = ["2ptMade", "3ptMade"]



export const recalculateMatchInfo = async ({ matchId, action }) => {
  if( scoreActions.includes(action) || foulActions.includes(action) )
    pubSub.publish(`MATCH_${matchId}_UPDATED`, { matchUpdated: await Match.findById(matchId) })
}



export default {
  Mutation: {
    createMatch: async (_, { match }) => {
      let found = await Match.create(match)
      return await Match.findById(found.id, { include: [{ model: Group, as: "home" }] })
    },

    createMatchAction: async (_, { matchAction }) => {
      const match = await Match.findById(matchAction.matchId)
      const { completedAt, ...newMatchAction } = matchAction
      const time = match.periodPausedAt || completedAt

      if( match.periodStartedAt ) {
        const elapsed = moment(time).diff(match.periodStartedAt, "seconds")
        newMatchAction.completedTime = elapsed % match.periodDuration
        newMatchAction.completedPeriod = match.period

      } else {
        newMatchAction.completedTime = 0
        newMatchAction.completedPeriod = 0
      }

      let found = await MatchAction.create(newMatchAction)
      recalculateMatchInfo(found)
      return found
    },

    deleteMatch: async (_, { matchId }) => {
      let found = await Match.findById(matchId)
      return await found.destroy()
    },

    deleteMatchAction: async (_, { matchActionId }) => {
      let found = await MatchAction.findById(matchActionId)
      await found.destroy()
      recalculateMatchInfo()
      return found
    },

    pauseMatchPeriod: async (_, { matchId, time }) => {
      let found = await Match.findById(matchId)
      if( found.periodPausedAt ) return
      found.periodPausedAt = time
      await found.save()

      pubSub.publish(`MATCH_${found.id}_UPDATED`, { matchUpdated: found })
      return found
    },

    setMatchAwayFouls: async (_, { matchId, fouls }) => {
      const found = await Match.findById(matchId)
      found.awayFouls = fouls
      await found.save()

      pubSub.publish(`MATCH_${found.id}_UPDATED`, { matchUpdated: found })
      return found
    },

    setMatchAwayScore: async (_, { matchId, score }) => {
      const found = await Match.findById(matchId)
      found.awayScore = score
      await found.save()

      pubSub.publish(`MATCH_${found.id}_UPDATED`, { matchUpdated: found })
      return found
    },

    startMatchPeriod: async (_, { matchId, period, elapsed, time }) => {
      /**
       * To account for changes in time, we simply shift the startedAt 
       * according to the period and period time specified.
       *
       * That way, irrespective of the previous state, we will always have the 
       * correct startAt
       */
      let found = await Match.findById(matchId)
      found.period = period
      found.periodStartedAt = moment(time).subtract(elapsed, "seconds")
      found.periodPausedAt = null

      await found.save()
      pubSub.publish(`MATCH_${found.id}_UPDATED`, { matchUpdated: found })

      return found
    },

    updateMatch: async (_, { match }) => {
      let found = await Match.findById(match.id)
      await found.update(match)
      found = await Match.findById(match.id)
      pubSub.publish(`MATCH_${found.id}_UPDATED`, { matchUpdated: found })
      return found
    },

    updateMatchAction: async (_, { matchAction }) => {
      let found = await MatchAction.findById(matchAction.id)
      await found.update(matchAction)
      recalculateMatchInfo()
      return found
    }
  },

  Query: {
    match: (_, { id }) => Match.findById(id, { include: [{ model: Group, as: "home" }] }),
    matches: (_, conditions) => Match.findAll({ where: conditions, include: [{ model: Group, as: "home" }] }),
    matchStat: (_, conditions) => MatchStat.findOne({ where: conditions }),
    matchStats: (_, conditions) => MatchStats.findAll({ where: conditions }),
  },

  Subscription: {
    matchUpdated: {
      subscribe: (_, { id }) => pubSub.asyncIterator(`MATCH_${id}_UPDATED`)
    }
  }
}
