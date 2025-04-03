import React from "react";
import { Link } from "react-router-dom";


const UserList = ({users,isLoading})=>{





    return(
        <div>
        <h1>User List</h1>
         <ul style={{display:'flex' , flexDirection:'column'}}>
           {
            isLoading ? (<h1>Loading...</h1>) : (
                users.map((items)=>{
                    return(
                        <Link key={items.id} to={`/users/${items.id}`}>{items.name}</Link>
                    )
                })
            )
           }
         </ul>
   </div>
    )
}

export default UserList;