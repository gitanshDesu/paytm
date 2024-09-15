import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"
import PrivateRoutes from "./pages/PrivateRoutes"



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Navigate to = "/signin"/>}/>
      <Route element = {<PrivateRoutes value= {"not-auth"} redirectTo={"/dashboard"}/>}>
      <Route path="/signup" element = {<Signup/>}/>
      <Route path="/signin" element = {<Signin/>}/>
      </Route>
      <Route element = {<PrivateRoutes value = {"auth"} redirectTo={"/signin"}/>}>
      <Route path="/dashboard" element = {<Dashboard/>}/>
      <Route path="/send" element = {<SendMoney/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
