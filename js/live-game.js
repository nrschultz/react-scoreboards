var React = require('react');
var TeamScore = require('./team-score')
var Bases = require('./bases')
var helpers = require('./helpers')

var Matchup = React.createClass({
    render: function () {
        return (
            <div className='matchup four columns'>
                <TeamScore data={this.props.data.away} />
                <TeamScore data={this.props.data.home} />
            </div>
        );
    }
})

var Inning = React.createClass({
    render: function () {
        half_name = this.props.data.half ? "\u25BC" : "\u25B2"
        return (
            <span>{half_name} {helpers.ordinal(this.props.data.inning)}</span>
        )
    }
})

var GameInfo = React.createClass({
    render: function () {
        return (
            <div className='gameInfo four columns'>
                <Inning data={this.props.data} />
                <div>{this.props.data.balls} - {this.props.data.strikes}</div>
                <div>{this.props.data.outs} {helpers.pluralize(this.props.data.outs, "Out", "Outs")}</div>
            </div>
        );
    }
})

var LiveGame = React.createClass({
    render: function () {
        return (
            <div className='gameContainer row'>
                <Matchup data={this.props.data} />
                <GameInfo data={this.props.data.state} />
                <Bases data={this.props.data.state.bases} />
            </div>
        );
    }
});

module.exports = LiveGame;
