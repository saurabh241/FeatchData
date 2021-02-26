import React, {useState} from "react"
const Service = () => {
    
    const [name, setname] = useState(0)
    return(
        <div>
            <button onClick = {() => setname(name + 1)}> Service{name}</button>
            <button onClick = {() => setname(name + 1)}> Service{name}</button>
            <button onClick = {() => setname(name + 1)}> Service{name}</button>
            <button onClick = {() => setname(name + 1)}> Service{name}</button>
        </div>
    )
}

export default Service;