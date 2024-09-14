import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./components/Signup/Signup"
import Signin from "./components/Signin/Signin"
import Dashboard from "./components/Dashboard/Dashboard"
import SendMoney from "./components/SendMoney/SendMoney"


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/signup" element = {<Signup/>}/>
      <Route path="/signin" element = {<Signin/>}/>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      <Route path="/send" element = {<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
