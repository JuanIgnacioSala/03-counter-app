import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');

// ReactDOM.render (<PrimeraApp saludo ='Hola, saludo' />, divRoot);
ReactDOM.render (<CounterApp value={0} />, divRoot);