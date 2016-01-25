var React = require('react');
var ReactDOM = require('react-dom');

var Bases = React.createClass({
    getDefaultProps: function()  {
        return {base_coordinates: [[50-Math.sqrt(200), 25], [25, Math.sqrt(200)], [Math.sqrt(200), 25]]}
    },

    componentDidMount: function() {
        var context = ReactDOM.findDOMNode(this).   ('canvas')[0].getContext('2d');
        this.paint(context);
    },

    componentDidUpdate: function() {
        var context = ReactDOM.findDOMNode(this).getElementsByTagName('canvas')[0].getContext('2d');
        context.clearRect(0, 0, 50, 50);
        this.paint(context);
    },

    paint: function(context) {
        for (i = 0; i < this.props.base_coordinates.length; i++) {
            context.save();
            context.translate(this.props.base_coordinates[i][0], this.props.base_coordinates[i][1])
            context.rotate((Math.PI/180) * 45);

            // determine fill color
            if (this.props.data[i]) {
                context.fillStyle = '#1b73bc';
            } else {
                context.fillStyle = '#fff'
            }
            context.fillRect(0, 0, 10, 10);

            // stroke
            context.strokeStyle = '#777';
            context.strokeRect(0, 0, 10, 10);

            context.restore();

        }
    },

    render: function() {
        return (
            <div className='four columns'>
                <canvas width={50} height={50} />
            </div>
        );
    }

});

module.exports = Bases;
