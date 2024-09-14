
import { useState } from 'react'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Input from '../components/Input'
import SubHeading from '../components/SubHeading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  async function onClickHandler(){
   const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
      username,
      firstName,
      lastName,
      password
    });
    localStorage.setItem("token",response.data.token);
    //automatically takes user to dashboard after successful signup
    navigate("/dashboard")
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label = {"Sign up"}/>
      <SubHeading label = {"Enter your information to create an account"}/>
      <Input onChange={e=> setFirstName(e.target.value)} label = {"First Name"} placeholder= {"John"}/>
      <Input onChange={e=> setLastName(e.target.value)} label = {"Last Name"} placeholder= {"Doe"}/>
      <Input onChange={e=> setUsername(e.target.value)} label = {"Email"} placeholder= {"gitansh@gmail.com"}/>
      <Input onChange={e=> setPassword(e.target.value)} label = {"Password"} placeholder= {"123456"}/>
      </div>
      <div className="pt-4">
      <Button label= {"Sign up"} onClick={onClickHandler}/>
      </div>
      <BottomWarning label = {"Already have an account?"} buttonText= {"Sign in"} to = {"/signin"}/>
      </div>
    </div>
  )
}

export default Signup