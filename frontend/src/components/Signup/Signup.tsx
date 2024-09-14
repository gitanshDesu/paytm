
import BottomWarning from './BottomWarning'
import Button from './Button'
import Heading from './Heading'
import Input from './Input'
import SubHeading from './SubHeading'

function Signup() {
  function onClickHandler(){

  }
  return (
    <div>
      <Heading label = {"Sign up"}/>
      <SubHeading label = {"Enter your information to create an account"}/>
      <Input label = {"First Name"} placeholder= {"John"}/>
      <Input label = {"Last Name"} placeholder= {"Doe"}/>
      <Input label = {"Email"} placeholder= {"gitansh@gmail.com"}/>
      <Input label = {"Password"} placeholder= {"123456"}/>
      <Button label= {"Sign up"} onClick={onClickHandler}/>
      <BottomWarning label = {"Already have an account?"} buttonText= {"Sign in"} to = {"/signin"}/>
    </div>
  )
}

export default Signup