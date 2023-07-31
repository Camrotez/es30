import { useState } from "react";

function ClickCounter(){
    const [count,setCount] = useState(0)
    const click = () =>{
        setCount(count + 1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={click}>Click</button>
        </div>
    )
}
export default ClickCounter