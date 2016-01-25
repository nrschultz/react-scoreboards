var React = require('react');
var dateFormat = require('dateformat');

var DateDivider = React.createClass({
    render: function () {
        return (
            <div className='dateDivider'>
                <span className='date'>{dateFormat(this.props.date, "mmm dS")}</span>
            </div>
        );
    }
});

module.exports = DateDivider;
