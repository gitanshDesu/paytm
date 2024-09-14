import { useEffect, useState } from 'react'
import Button from './Button';
import axios from 'axios'
interface UsersProps{
   firtName:string;
   lastName:string;
   _id:number
}
interface UserProps{
    user: UsersProps
}
function Users() {
    // Replace with backend call
    const [users,setUsers] = useState<UsersProps[]>([]);
    const [filter,setFilter] = useState("");
    //Add debouncing here
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+ filter)
            .then(response =>{
                console.log(response.data)
                setUsers(response.data.user)
            })
    },[filter])
  return (
    <div>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input
            onChange={(e)=>setFilter(e.target.value)} 
            type="text" 
            placeholder='Search users...' 
            className="w-full px-2 py-1 border rounded border-slate-200" />
        </div>
        <div>
            {users.map((user,index)=>  <User key = {index} user = {user}/>)}
        </div>
    </div>
  )
}

function User({user}:UserProps){
    return (
        <div className="flex justify-between">
            <div  className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">
                {user.firtName![0] || ""}
            </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
               <div>
               {user.firtName} {user.lastName}
               </div>
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
        <Button label= {"Send Money"}/>
        </div>
        </div>
    )
}

export default Users