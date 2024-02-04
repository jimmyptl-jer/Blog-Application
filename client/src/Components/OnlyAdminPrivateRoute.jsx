import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const OnlyAdminRoute = () => {

  const { currentUser } = useSelector(state => state.user)
  return currentUser.isAdmin ? <Outlet /> : <Navigate to='/sign-in' />
}

export default OnlyAdminRoute