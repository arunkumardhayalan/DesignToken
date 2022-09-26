import React, { useState, useEffect, useRef } from 'react';

function Hooks(props) {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Hi there, how are you?');

    // usestate function


    // useEffect function

    useEffect(() => {
        console.log('trigger use effect hook');

        setTimeout(() => {
            setMessage("I'm fine, thanks for asking.");
        }, 1000)
    })

    //Useref function
    const counter = useRef(0);
    // increase the counter by one
    const handleIncreaseCounter = () => {
        counter.current = counter.current + 1;
    };
    return (
        <div className='container'>
            <div className='useState mt-2 mb-2'>
                <div>
                    Today you've taken {count} steps!
                    <button className='btn btn-primary ms-2' onClick={() => setCount(count + 1)}>
                        I took another step
                    </button>
                </div>
            </div>
            <div className='useeffect mb-2'>
                <h6>{message}</h6>
            </div>
            <div className='use'>
                <h1>Learn about useRef!</h1>
                <h2>Value: {counter.current}</h2>
                <button onClick={handleIncreaseCounter}>
                    Increase counter
                </button>
            </div>
        </div>
    );
}

export default Hooks;