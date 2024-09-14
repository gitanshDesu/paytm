
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Input from '../components/Input'
import SubHeading from '../components/SubHeading'

function Signin() {
  function onClickHandler(){

  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <Heading label = {"Sign In"}/>
      <SubHeading label = {"Enter your credentials to access your account"}/>
      <Input label = {"Email"} placeholder= {"gitansh@gmail.com"}/>
      <Input label = {"Password"} placeholder= {"123456"}/>
      </div>
      <div className="pt-4">
      <Button label= {"Sign in"} onClick={onClickHandler}/>
      </div>
      <BottomWarning label = {"Don't have an account?"} buttonText= {"Sign up"} to = {"/signup"}/>
      </div>
    </div>
  )
}

export default Signin