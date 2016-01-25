var React = require('react');

var TeamScore = React.createClass({
    render: function() {
        return (
            <div className='teamScore'>
                {this.props.data.team.name}: {this.props.data.score}
            </div>
        );
    }
});

module.exports = TeamScore;
