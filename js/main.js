var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./game');
var DateDivider = require('./date-divider')

ReactDOM.render(
    <div className='scoreboard'>
        <DateDivider date={Date("January 20th, 2016")} />
        <Game startingIndex={0} />
        <Game startingIndex={1} />
        <DateDivider date={Date()} />
        <Game startingIndex={2} />
        <Game startingIndex={3} />
        <DateDivider date={Date("January 23rd, 2016")} />
        <Game startingIndex={4} />
        <Game startingIndex={0} />
        <Game startingIndex={1} />
    </div>,
  document.getElementById('example')
);
console.log('rendered')
