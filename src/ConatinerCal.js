import { useState } from 'react';
import './ContainerCal.css';

const Container=()=>{

    const [input,setInput]=useState('');

    const HandelButtonClick=(value)=>{
        setInput(input+value);
    };

    const handleClear = () => {
        setInput('');
    };

    const Evaluate=()=>{
        setInput(eval(input));
    }

    const RemoveLast=()=>{
        setInput(input.substring(0,input.length-1));
    }

    return(
    <div className="main">
        <div id="heading">
            <h1>Calculator</h1>
        </div>
        <br/>
        <div id="show">
            <input type="text" value={input} id="toshow" placeholder="0"/>
        </div>
        <br/> 
        <div className="second">
            <div id="lines">
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('7')}>7</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('8')}>8</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('9')}>9</button>
                </div>
                <div id="buttons">
                    <button id="delbut" onClick={RemoveLast}>DEL</button>
                </div>
            </div>
            <div id="lines">
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('4')}>4</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('5')}>5</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('6')}>6</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('+')}>+</button>
                </div>
            </div>
            <div id="lines">
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('1')}>1</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('2')}>2</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('3')}>3</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('-')}>-</button>
                </div>
            </div>
            <div id="lines">
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('.')}>.</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('0')}>0</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('/')}>/</button>
                </div>
                <div id="buttons">
                    <button id="butt" onClick={()=>HandelButtonClick('*')}>*</button>
                </div>
            </div>
            <div id="lines">
                <div id="buttons">
                    <button id="ac" onClick={handleClear}>AC</button>
                </div>
                <div id="buttons">
                    <button id="equal" onClick={Evaluate}>=</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Container;