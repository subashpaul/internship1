import { React, useState } from 'react'
import '../App.css'
export default function Counter(props) {


    return (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" onClick={props.decrease}>-</button>
                <span className="counter__output">{props.counter}</span>
                <button className="control__btn" onClick={props.increase}>+</button>
                {/* <button className="reset" onClick={props.reset}>Reset</button> */}
            </div>
        </div>
    );
}