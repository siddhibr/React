import { useState } from "react";

function Counter() {
    const initialPrice = 1000        
    const [counter, setCounter] = useState(1)
    const[price, setPrice] = useState(1000)
    
    function Increment() {
        // alert("Hii")
        if (counter < 10) {
            setCounter(prevValue => prevValue + 1);
            // alert(counter)
            setPrice(initialPrice * (counter + 1));
        }
    }
    function Decrement() {
        if (counter > 1) {
            setCounter(prevValue => prevValue - 1)
            setPrice(initialPrice * (counter - 1));
        }
    }
    function Reset() {
        setPrice(initialPrice)
        setCounter(1)
    }
    return (
        <div>
            <h1>Counter - {counter} and Price {price}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Counter;