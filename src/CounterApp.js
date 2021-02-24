// import React, { Fragment } from "react";
import React, {useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) =>{


    const [counter, setCounter] = useState( value );
    
    //handleAdd
    const handleAdd = ()=> {
        setCounter(counter + 1);
        //setCounter((c)=> c + 1);
    }
    const handleReset = ()=> {
        setCounter(value);
        //setCounter((c)=> c + 1);
    }
    const handleSubstra = ()=> {
        setCounter(counter - 1);
        //setCounter((c)=> c + 1);
    }

    return (<>
    <h1> Contador </h1>
    <h2>{counter}</h2>

    <button  className='but' onClick={ handleSubstra }>-1</button>
    <button onClick={ handleReset }>Reset</button>
    <button className='but' onClick={ handleAdd }>+1</button>
    </>)
}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;
