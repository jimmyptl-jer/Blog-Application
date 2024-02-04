
import { Button, TextInput } from 'flowbite-react'
import { useMutation, useQueryClient } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import * as apiClient from '../http'

import GrayWolf from '../assets/graywolf.svg'

import { useAppContext } from '../Context/AppContext'
import { useSelector } from 'react-redux'

const DashProfile = () => {

  const queryClient = useQueryClient();
  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { currentUser } = useSelector(state => state.user)

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({ message: "Logout Successful", type: "SUCCESS" });
      navigate("/");
    },
    onError: () => {
      showToast({ message: "Sorry! something went wrong", type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <img src={GrayWolf} alt='user' className='rounded-full w-full h-full object-cover border-8 border-${black}'></img>
        </div>

        {currentUser && <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username}></TextInput>}

        {currentUser && <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email}></TextInput>}

        {
          currentUser.isAdmin && (
            <Link to='/create-post'>
              <Button type='button'
                gradientDuoTone='purpleToPink'
                className='w-full'>
                Create Post
              </Button>
            </Link>
          )
        }

        {
          currentUser.isAdmin && (
            <Link to='/create-project'>
              <Button type='button'
                gradientDuoTone='purpleToPink'
                className='w-full'>
                Add New Project
              </Button>
            </Link>
          )
        }
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <button onClick={handleClick} className='cursor-pointer'>Sign Out</button>
        <span className='cursor-pointer'>Delete Account</span>
      </div>
    </div>
  )
}

export default DashProfile