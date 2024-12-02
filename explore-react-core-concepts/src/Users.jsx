import { useEffect, useState } from "react"

export default function Users(user){
    const {name,email,id}=user;

    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))

    },[])



    return(
        <>
        {/* <h1>Users:{users.length}</h1> */}

        
        <div >
        {
            users.map(user=> (
                <div key={user.id}>
                     <h4>Name:{user.name}</h4>
                     <p>Email:{user.email}</p>

                </div>
            ))
        }
            
           

        </div>
        
        </>    )
}