
import BottomWarning from './BottomWarning'
import Button from './Button'
import Heading from './Heading'
import Input from './Input'
import SubHeading from './SubHeading'

function Signup() {
  function onClickHandler(){

  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label = {"Sign up"}/>
      <SubHeading label = {"Enter your information to create an account"}/>
      <Input label = {"First Name"} placeholder= {"John"}/>
      <Input label = {"Last Name"} placeholder= {"Doe"}/>
      <Input label = {"Email"} placeholder= {"gitansh@gmail.com"}/>
      <Input label = {"Password"} placeholder= {"123456"}/>
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