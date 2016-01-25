game_states = [
    {
        home: {
            team: {
                name: 'Tigers'
            },
            score: 3
        },
        away: {
            team: {
                name: 'Bulldogs'
            },
            score: 1
        },
        state: {
            inning: 3,
            half: 1,
            balls: 2,
            strikes: 1,
            outs: 1,
            bases: [false, true, false]
        },
        location: 'Central Park Field 1',
        time: '1:00 PM',
        status: 'live'
    },
    {
        home: {
            team: {
                name: 'Tigers'
            },
            score: 3
        },
        away: {
            team: {
                name: 'Bulldogs'
            },
            score: 1
        },
        state: {
            inning: 3,
            half: 1,
            balls: 0,
            strikes: 0,
            outs: 1,
            bases: [true, false, true]
        },
        location: 'Central Park Field 1',
        time: '1:00 PM',
        status: 'live'
    },
    {
        home: {
            team: {
                name: 'Tigers'
            },
            score: 3
        },
        away: {
            team: {
                name: 'Bulldogs'
            },
            score: 1
        },
        state: {
            inning: 3,
            half: 1,
            balls: 1,
            strikes: 0,
            outs: 1,
            bases: [true, false, true]
        },
        location: 'Central Park Field 1',
        time: '1:00 PM',
        status: 'live'
    },
    {
        home: {
            team: {
                name: 'Tigers'
            },
            score: 3
        },
        away: {
            team: {
                name: 'Bulldogs'
            },
            score: 1
        },
        state: {
            inning: 3,
            half: 1,
            balls: 1,
            strikes: 1,
            outs: 1,
            bases: [true, false, true]
        },
        location: 'Central Park Field 1',
        time: '1:00 PM',
        status: 'live'
    },
    {
        home: {
            team: {
                name: 'Tigers'
            },
            score: 5
        },
        away: {
            team: {
                name: 'Bulldogs'
            },
            score: 1
        },
        state: {
            inning: 3,
            half: 1,
            balls: 0,
            strikes: 0,
            outs: 1,
            bases: [false, false, true]
        },
        location: 'Central Park Field 1',
        time: '1:00 PM',
        status: 'live'
    },
]

module.exports = game_states
