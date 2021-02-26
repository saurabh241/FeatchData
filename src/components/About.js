import React,{useState,useEffect} from 'react'
import axios from "axios"

export default function FeatchData() {
   const [psot,setPost] = useState([])
   
   useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(res => {
           console.log(res)
       })
       .catch(err => {
           console.log(err)
       })
   })
    return (
        <div>
            <ul>
                {
                    psot.map(psot => <li key = {post .id}>{psot.title}</li>)
                }
            </ul>
        </div>
    )
}
