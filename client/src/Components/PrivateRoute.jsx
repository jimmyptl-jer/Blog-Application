import { Navigate, Outlet } from "react-router-dom"
import { useAppContext } from "../Context/AppContext"

const PrivateRoute = () => {

  const { isLogged } = useAppContext()

  return isLogged ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute