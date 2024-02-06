import Hero from "../Components/Hero"

import Experience from "../Components/Experience"

import { useQuery } from 'react-query'
import * as apiClient from '../http'
import { useDispatch } from "react-redux"
import { signInSuccess } from "../store/user-slice"

const Home = () => {


  const dispatch = useDispatch()
  const { data: currentUser } = useQuery('fetchCurrentUser', apiClient.fetchCurrentUser, {});
  dispatch(signInSuccess(currentUser))


  return (
    <div>
      <Hero />
      <Experience />
    </div>

  )
}

export default Home