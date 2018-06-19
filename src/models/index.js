import Account from "./Account"
import AthleteEntity from "./Athlete"
import AthleteGroup from "./AthleteGroup"
import Group from "./Group"
import Institution from "./Institution"
import Match from "./Match"
import MatchAction from "./MatchAction"



AthleteEntity.belongsTo(Institution)
Group.belongsTo(Institution)
Match.belongsTo(Group, { as: "home" })
AthleteEntity.belongsToMany(Group, { through: AthleteGroup, as: "groups" })
Group.belongsToMany(AthleteEntity, { through: AthleteGroup, as: "players" })
Match.hasMany(MatchAction, { as: "matchActions" })
Account.belongsTo(AthleteEntity, { foreignKey: "id" })
AthleteEntity.hasOne(Account, { foreignKey: "id" })



const Athlete = { model: AthleteEntity, include: [Account] }
export { Account, Athlete, AthleteGroup, Group, Institution, Match, MatchAction }
