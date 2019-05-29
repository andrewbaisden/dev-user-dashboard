import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

console.log('hello world');

let myNum = 341231234;
let n = myNum
	.toString()
	.split('')
	.filter(num => num === 4);

console.log(n);
