import { Link } from 'react-router-dom'
import GrayWolf from '../assets/graywolf.svg';
import LoginForm from '../Components/Forms/LoginForm';


import { useQuery } from 'react-query'
import * as apiClient from '../http'
import { useDispatch } from "react-redux"
import { signInSuccess } from "../store/user-slice"

const Login = () => {


  const dispatch = useDispatch()

  const { data: currentUser } = useQuery('fetchCurrentUser', apiClient.fetchCurrentUser, {});

  dispatch(signInSuccess(currentUser))



  return (
    <div className="min-h-screen mt-10">
      <div className="flex max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        <div className="flex-1 items-center flex-col justify-center">
          <img
            src={GrayWolf}
            alt="Logo"
            className="w-50 h-50 object-contain justify-center"
          />
          <p className='text-slate-800 font-bold text-center mt-2'>
            Welcome to My Community!
            <span className='block text-slate-600 font-normal'>
              Let create, inspire, and build a supportive community where ideas thrive. Welcome aboard!
            </span>
          </p>
        </div>

        <div className="flex-1">
          <LoginForm />
          <div className='flex gap-2 text-sm font-bold mt-5'>
            <span>Want to create account?</span>
            <Link to='/register' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
