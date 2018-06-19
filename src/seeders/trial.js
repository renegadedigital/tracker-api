'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			'institution',
			[
				{"id":1,"name":"Elite Athlete Tracker","createdAt":"2018-06-24T17:23:41.805+00:00","updatedAt":"2018-06-24T17:23:41.805+00:00"}
			]
		)

    await queryInterface.bulkInsert(
      'account', 
      [
        {"id":1,"accountType":"athlete","firstName":"Jordan","lastName":"Unwin","email":"j.unwin@elitesportstracker.com.au","createdAt":"2018-06-24T17:24:14.736+00:00","updatedAt":"2018-06-24T17:24:14.736+00:00"},
        {"id":2,"accountType":"athlete","firstName":"Caleb","lastName":"Unwin","email":"c.unwin@eliteathletetracker.com.au","createdAt":"2018-06-24T17:26:03.565+00:00","updatedAt":"2018-06-24T17:26:03.565+00:00"},
        {"id":3,"accountType":"athlete","firstName":"Jacob","lastName":"Klos","email":"j.klos@eliteathletetracker.com.au","createdAt":"2018-06-24T17:26:22.741+00:00","updatedAt":"2018-06-24T17:26:22.741+00:00"},
        {"id":4,"accountType":"athlete","firstName":"Nathan","lastName":"Leeson","email":"n.leeson@eliteathletetracker.com.au","createdAt":"2018-06-24T17:26:48.115+00:00","updatedAt":"2018-06-24T17:26:48.115+00:00"},
        {"id":5,"accountType":"athlete","firstName":"Eddie","lastName":"Carlton","email":"e.carlton@eliteathletetracker.com.au","createdAt":"2018-06-24T17:27:02.92+00:00","updatedAt":"2018-06-24T17:27:02.92+00:00"},
        {"id":6,"accountType":"athlete","firstName":"Luke","lastName":"Green","email":"l.green@eliteathletetracker.com.au","createdAt":"2018-06-24T17:27:14.525+00:00","updatedAt":"2018-06-24T17:27:14.525+00:00"},
        {"id":7,"accountType":"athlete","firstName":"Kobe","lastName":"Helu","email":"k.helu@eliteathletetracker.com.au","createdAt":"2018-06-24T17:27:34.385+00:00","updatedAt":"2018-06-24T17:27:34.385+00:00"},
        {"id":8,"accountType":"athlete","firstName":"Joel","lastName":"Potts","email":"j.potts@eliteathletetracker.com.au","createdAt":"2018-06-24T17:27:48.627+00:00","updatedAt":"2018-06-24T17:27:48.627+00:00"},
        {"id":9,"accountType":"athlete","firstName":"Jake","lastName":"De Andrade","email":"j.deandrade@eliteathletetracker.com.au","createdAt":"2018-06-24T17:28:07.227+00:00","updatedAt":"2018-06-24T17:28:07.227+00:00"},
        {"id":10,"accountType":"athlete","firstName":"Jawon","lastName":"Fesolai","email":"j.fesolai@eliteathletetracker.com.au","createdAt":"2018-06-24T17:28:22.661+00:00","updatedAt":"2018-06-24T17:28:22.661+00:00"},
        {"id":11,"accountType":"athlete","firstName":"Liam","lastName":"Stringer","email":"l.stringer@eliteathletetracker.com.au","createdAt":"2018-06-24T17:30:35.774+00:00","updatedAt":"2018-06-24T17:30:35.774+00:00"},
        {"id":12,"accountType":"athlete","firstName":"Nathan","lastName":"Rancie","email":"n.rancie@eliteathletetracker.com.au","createdAt":"2018-06-24T17:30:57.726+00:00","updatedAt":"2018-06-24T17:30:57.726+00:00"},
        {"id":13,"accountType":"athlete","firstName":"VJ","lastName":"Su'a","email":"vj.sua@eliteathletetracker.com.au","createdAt":"2018-06-24T17:31:15.422+00:00","updatedAt":"2018-06-24T17:31:15.422+00:00"},
        {"id":14,"accountType":"athlete","firstName":"Nicholas","lastName":"Stratov","email":"n.stratov@eliteathletetracker.com.au","createdAt":"2018-06-24T17:31:36.81+00:00","updatedAt":"2018-06-24T17:31:36.81+00:00"},
        {"id":15,"accountType":"athlete","firstName":"Harry","lastName":"Naismith","email":"h.naismith@eliteathletetracker.com.au","createdAt":"2018-06-24T17:31:50.334+00:00","updatedAt":"2018-06-24T17:31:50.334+00:00"},
        {"id":16,"accountType":"athlete","firstName":"Mitchell","lastName":"Golden","email":"m.golden@eliteathletetracker.com.au","createdAt":"2018-06-24T17:32:04.423+00:00","updatedAt":"2018-06-24T17:32:04.423+00:00"},
        {"id":17,"accountType":"athlete","firstName":"Riley","lastName":"Pollard","email":"r.pollard@eliteathletetracker.com.au","createdAt":"2018-06-24T17:32:17.563+00:00","updatedAt":"2018-06-24T17:32:17.563+00:00"},
        {"id":18,"accountType":"athlete","firstName":"Dale","lastName":"Leeson","email":"d.leeson@eliteathletetracker.com.au","createdAt":"2018-06-24T17:32:31.014+00:00","updatedAt":"2018-06-24T17:32:31.014+00:00"},
        {"id":19,"accountType":"athlete","firstName":"William","lastName":"Wallace","email":"w.wallace@eliteathletetracker.com.au","createdAt":"2018-06-24T17:33:19.438+00:00","updatedAt":"2018-06-24T17:33:19.438+00:00"},
        {"id":20,"accountType":"athlete","firstName":"Jovaan","lastName":"Tusevljak","email":"j.tusevljak@eliteathletetracker.com.au","createdAt":"2018-06-24T17:35:58.924+00:00","updatedAt":"2018-06-24T17:35:58.924+00:00"},
        {"id":21,"accountType":"athlete","firstName":"Luke","lastName":"Konstantopoulos","email":"l.konstantopoulos@eliteathletetracker.com.au","createdAt":"2018-06-24T17:36:18.746+00:00","updatedAt":"2018-06-24T17:36:18.746+00:00"},
        {"id":22,"accountType":"athlete","firstName":"Murray","lastName":"Tafiti-Howman","email":"m.tafitihowman@eliteathletetracker.com.au","createdAt":"2018-06-24T17:36:46.924+00:00","updatedAt":"2018-06-24T17:36:46.924+00:00"},
        {"id":23,"accountType":"athlete","firstName":"John","lastName":"Tu'inukuafe","email":"j.tuinukuafe@eliteathletetracker.com.au","createdAt":"2018-06-24T17:37:06.865+00:00","updatedAt":"2018-06-24T17:37:06.865+00:00"},
        {"id":24,"accountType":"athlete","firstName":"Jakub","lastName":"Llloyd","email":"j.lloyd@eliteathletetracker.com.au","createdAt":"2018-06-24T17:37:24.714+00:00","updatedAt":"2018-06-24T17:37:24.714+00:00"},
        {"id":25,"accountType":"athlete","firstName":"TJ","lastName":"Hepi","email":"tj.hepi@eliteathletetracker.com.au","createdAt":"2018-06-24T17:37:38.815+00:00","updatedAt":"2018-06-24T17:37:38.815+00:00"},
        {"id":26,"accountType":"athlete","firstName":"Heath","lastName":"Johnson","email":"h.johnson@eliteathletetracker.com.au","createdAt":"2018-06-24T17:37:51.208+00:00","updatedAt":"2018-06-24T17:37:51.208+00:00"},
        {"id":27,"accountType":"athlete","firstName":"Connor","lastName":"Murphy","email":"c.murphy@eliteathletetracker.com.au","createdAt":"2018-06-24T17:38:02.236+00:00","updatedAt":"2018-06-24T17:38:02.236+00:00"},
        {"id":28,"accountType":"athlete","firstName":"Jack","lastName":"Carthew","email":"j.carthew@eliteathletetracker.com.au","createdAt":"2018-06-24T17:38:15.44+00:00","updatedAt":"2018-06-24T17:38:15.44+00:00"},
        {"id":29,"accountType":"athlete","firstName":"Jackson","lastName":"Dean","email":"j.dean@eliteathletetracker.com.au","createdAt":"2018-06-24T17:38:25.732+00:00","updatedAt":"2018-06-24T17:38:25.732+00:00"},
        {"id":30,"accountType":"athlete","firstName":"Denzel","lastName":"Facun","email":"d.facun@eliteathletetracker.com.au","createdAt":"2018-06-24T17:38:36.686+00:00","updatedAt":"2018-06-24T17:38:36.686+00:00"}
      ]
    )

    await queryInterface.bulkInsert(
      'athlete', 
      [
				{"id":1,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:24:14.736+00:00","updatedAt":"2018-06-24T17:24:14.777+00:00"},
				{"id":2,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:26:03.565+00:00","updatedAt":"2018-06-24T17:26:03.59+00:00"},
				{"id":3,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:26:22.741+00:00","updatedAt":"2018-06-24T17:26:22.767+00:00"},
				{"id":4,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:26:48.115+00:00","updatedAt":"2018-06-24T17:26:48.156+00:00"},
				{"id":5,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:27:02.92+00:00","updatedAt":"2018-06-24T17:27:02.966+00:00"},
				{"id":6,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:27:14.525+00:00","updatedAt":"2018-06-24T17:27:14.58+00:00"},
				{"id":7,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:27:34.385+00:00","updatedAt":"2018-06-24T17:27:34.488+00:00"},
				{"id":8,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:27:48.627+00:00","updatedAt":"2018-06-24T17:27:48.653+00:00"},
				{"id":9,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:28:07.227+00:00","updatedAt":"2018-06-24T17:28:07.331+00:00"},
				{"id":10,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:28:22.661+00:00","updatedAt":"2018-06-24T17:28:22.717+00:00"},
				{"id":11,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:30:35.774+00:00","updatedAt":"2018-06-24T17:30:35.807+00:00"},
				{"id":12,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:30:57.726+00:00","updatedAt":"2018-06-24T17:30:57.75+00:00"},
				{"id":13,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:31:15.422+00:00","updatedAt":"2018-06-24T17:31:15.443+00:00"},
				{"id":14,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:31:36.81+00:00","updatedAt":"2018-06-24T17:31:36.863+00:00"},
				{"id":15,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:31:50.334+00:00","updatedAt":"2018-06-24T17:31:50.343+00:00"},
				{"id":16,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:32:04.423+00:00","updatedAt":"2018-06-24T17:32:04.462+00:00"},
				{"id":17,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:32:17.563+00:00","updatedAt":"2018-06-24T17:32:17.617+00:00"},
				{"id":18,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:32:31.014+00:00","updatedAt":"2018-06-24T17:32:31.056+00:00"},
				{"id":19,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:33:19.438+00:00","updatedAt":"2018-06-24T17:33:19.481+00:00"},
				{"id":20,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:35:58.924+00:00","updatedAt":"2018-06-24T17:35:58.97+00:00"},
				{"id":21,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:36:18.746+00:00","updatedAt":"2018-06-24T17:36:18.792+00:00"},
				{"id":22,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:36:46.924+00:00","updatedAt":"2018-06-24T17:36:47.047+00:00"},
				{"id":23,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:37:06.865+00:00","updatedAt":"2018-06-24T17:37:06.948+00:00"},
				{"id":24,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:37:24.714+00:00","updatedAt":"2018-06-24T17:37:24.756+00:00"},
				{"id":25,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:37:38.815+00:00","updatedAt":"2018-06-24T17:37:38.84+00:00"},
				{"id":26,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:37:51.208+00:00","updatedAt":"2018-06-24T17:37:51.226+00:00"},
				{"id":27,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:38:02.236+00:00","updatedAt":"2018-06-24T17:38:02.239+00:00"},
				{"id":28,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:38:15.44+00:00","updatedAt":"2018-06-24T17:38:15.502+00:00"},
				{"id":29,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:38:25.732+00:00","updatedAt":"2018-06-24T17:38:25.753+00:00"},
				{"id":30,"accountType":"athlete","institutionId":1,"createdAt":"2018-06-24T17:38:36.686+00:00","updatedAt":"2018-06-24T17:38:36.714+00:00"}
      ]
    )

		await queryInterface.bulkInsert(
			'group',
			[
				{"id":1,"name":"Under 15s","institutionId":1,"type":"team","createdAt":"2018-06-24T17:24:25.461+00:00","updatedAt":"2018-06-24T17:24:25.461+00:00"},
				{"id":2,"name":"Under 17s","institutionId":1,"type":"team","createdAt":"2018-06-24T17:33:34.922+00:00","updatedAt":"2018-06-24T17:33:34.922+00:00"},
				{"id":3,"name":"Under 18s","institutionId":1,"type":"team","createdAt":"2018-06-24T17:38:55.646+00:00","updatedAt":"2018-06-24T17:38:55.646+00:00"}
			]
		)

		await queryInterface.bulkInsert(
			'athleteGroup',
			[
				{"athleteId":10,"number":4,"groupId":1},
				{"athleteId":9,"number":7,"groupId":1},
				{"athleteId":5,"number":25,"groupId":1},
				{"athleteId":4,"number":1,"groupId":1},
				{"athleteId":3,"number":20,"groupId":1},
				{"athleteId":2,"number":32,"groupId":1},
				{"athleteId":6,"number":5,"groupId":1},
				{"athleteId":7,"number":24,"groupId":1},
				{"athleteId":8,"number":34,"groupId":1},
				{"athleteId":1,"number":21,"groupId":1},
				{"athleteId":19,"number":14,"groupId":2},
				{"athleteId":18,"number":8,"groupId":2},
				{"athleteId":17,"number":25,"groupId":2},
				{"athleteId":16,"number":10,"groupId":2},
				{"athleteId":15,"number":5,"groupId":2},
				{"athleteId":14,"number":31,"groupId":2},
				{"athleteId":10,"number":4,"groupId":2},
				{"athleteId":13,"number":54,"groupId":2},
				{"athleteId":12,"number":23,"groupId":2},
				{"athleteId":11,"number":40,"groupId":2},
				{"athleteId":30,"number":15,"groupId":3},
				{"athleteId":29,"number":9,"groupId":3},
				{"athleteId":28,"number":20,"groupId":3},
				{"athleteId":27,"number":42,"groupId":3},
				{"athleteId":26,"number":33,"groupId":3},
				{"athleteId":25,"number":24,"groupId":3},
				{"athleteId":24,"number":11,"groupId":3},
				{"athleteId":23,"number":23,"groupId":3},
				{"athleteId":22,"number":21,"groupId":3},
				{"athleteId":21,"number":7,"groupId":3},
				{"athleteId":20,"number":3,"groupId":3}
			]
		)
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
