var React = require('react');
var PreGame = require('./pre-game');
var LiveGame = require('./live-game');
var PostGame = require('./post-game');
var states = require('./game-states');

var Game = React.createClass({
    getInitialState: function () {
        this.next_index = this.props.startingIndex
        return game_states[0]
    },
    updateGameState: function () {
        next_state = game_states[this.next_index]
        this.next_index = (this.next_index + 1) % game_states.length
        this.setState(next_state)
    },
    componentDidMount: function () {
        setInterval(this.updateGameState, 1000);
    },
    render: function () {
        if (this.state.status == 'live') {
            gameElement = <LiveGame data={this.state} />;
        } else if (this.state.status == 'pre-game') {
            gameElement = <PreGame data={this.state} />;
        } else if (this.state.status == 'post-game') {
            gameElement = <PostGame data={this.state} />;
        }
        return (
            <span>{gameElement}</span>
        );
    }
});

module.exports = Game;
