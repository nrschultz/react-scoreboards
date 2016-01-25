var React = require('react');
var TeamScore = require('./team-score')

var PostGame = React.createClass({
    render: function () {
        return (
            <div className='gameContainer'>
                <div>Final</div>
                <TeamScore data={this.props.data.away} />
                <TeamScore data={this.props.data.home} />
            </div>
        );
    }
});

module.exports = PostGame;
