import { useState, useRef, useContext } from "react"
// import { AppContext } from "../page"

export const Ref = () => {
    // const user = useContext(AppContext)
    const [count, setCount] = useState(0)
    const countRef = useRef(0)
    const handleIncrement = () => {
        setCount(count + 1)
        countRef.current + 1
    }
    return <div className="ref-hello">
        <div>
            {/* Count: {count} from user {user} */}
        </div>
        <button onClick={handleIncrement} >Increment count</button>
    </div >
}