import { Navigate, Outlet } from 'react-router-dom'
interface PrivateRoutesProps{
  redirectTo:string;
  value:string;
}
function PrivateRoutes({value,redirectTo}:PrivateRoutesProps) {
  // const [isLogin,setisLogin] = useState(false);
  const isLogin = !!localStorage.getItem("token"); // Simplified check using double negation

  if(value == "auth"){
    return (
    
      isLogin ? <Outlet/> : <Navigate to = {redirectTo}/>
    
  )
  }else {
   return isLogin ? <Navigate to = {redirectTo}/>: <Outlet/>
  }
}

export default PrivateRoutes