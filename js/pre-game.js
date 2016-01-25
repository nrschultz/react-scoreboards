var React = require('react');

var Team = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.data.team.name}
            </div>
        );
    }
});

var Matchup = React.createClass({
    render: function () {
        return (
            <div className='matchup six columns'>
                <Team data={this.props.data.away} />
                <div>at</div>
                <Team data={this.props.data.home} />
            </div>
        );
    }
})

var GameInfo = React.createClass({
    render: function () {
        return (
            <div className='gameInfo six columns'>
                <div>{this.props.data.time}</div>
                <div>{this.props.data.location}</div>
            </div>
        );
    }
})


var PreGame = React.createClass({
    render: function () {
        return (
            <div className='gameContainer row'>
                <Matchup data={this.props.data} />
                <GameInfo data={this.props.data} />
            </div>
        );
    }
});

module.exports = PreGame;
