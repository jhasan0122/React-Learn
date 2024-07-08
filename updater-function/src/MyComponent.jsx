import React, {useState} from 'react';
function MyComponent() {
    const [count,setCount] = useState(0);

    const increament = () => {
        setCount(c => c+1);
        setCount(c => c+1);
        setCount(c => c+1);
    }

    const decreament = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div className={"counter-container"}>
            <p className={"count-display"}>{count}</p>
            <button className={"counter-button"} onClick={decreament}>Decrement</button>
            <button className={"counter-button"} onClick={reset}>Reset</button>
            <button className={"counter-button"} onClick={increament}>Increment</button>
        </div>
    );
}

export default MyComponent