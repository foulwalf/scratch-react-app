import {useState} from "react";

function App(){
    const [count, setCount] = useState(0);
    const clickHandler = () => setCount(count + 1);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={clickHandler}> Click me </button>
            <input type="text"/>
        </div>
    )
}

export default App;