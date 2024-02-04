import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useQuery } from 'react-query'
import * as apiClient from '../http'
import { useDispatch } from "react-redux"
import { signInSuccess } from "../store/user-slice"
import DashSideBar from '../Components/DashSideBar'
import DashProfile from '../Components/DashProfile'
const Dashboard = () => {


  const dispatch = useDispatch()


  const { data: currentUser } = useQuery('fetchCurrentUser', apiClient.fetchCurrentUser, {});

  dispatch(signInSuccess(currentUser))



  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFormUrl = urlParams.get('tab')
    console.log(tabFormUrl)
  }, [location.search])

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        <DashSideBar />
      </div>
      <DashProfile />
    </div >
  )
}

export default Dashboard