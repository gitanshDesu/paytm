import { useEffect, useState } from 'react'
import AppBar from '../components/AppBar'
import Balance from '../components/Balance'
import Users from '../components/Users'
import axios from 'axios';
interface userProps{
  id?:string;
  firstName:string;
  lastName:string;
  balance:number;
}
function Dashboard() {
  const [user,setUser] = useState<userProps>({
    firstName:'',
    lastName:'',
    balance:0
  });
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/me",{
      headers:{
          Authorization: "Bearer "+localStorage.getItem("token"),
      }
  })
    .then(response=>{
      setUser(response.data);
      console.log(response.data)
    })
    .catch(error=>console.log(error))
  },[])
  return (
    <div>
      <AppBar firstName={user.firstName!} lastName={user.lastName!} />
      <div className='m-8'>
      <Balance value={user.balance.toString()} />
      <Users/>
      </div>
      </div>
  )
}

export default Dashboard