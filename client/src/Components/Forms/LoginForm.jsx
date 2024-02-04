import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Button } from 'flowbite-react'

import * as apiClient from '../../http'
import { useAppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(apiClient.login, {
    onSuccess: () => {
      showToast({ message: "Login Successful", type: "SUCCESS" });
      navigate('/');
    },
    onError: () => {
      showToast({ message: "Sorry! Something went wrong", type: "ERROR" });
    }
  })


  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    mutate(data)
  })



  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
      <h2 className='text-3xl font-bold'>Login</h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type='email'
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })} />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This filed id required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 character long",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      <Button type='submit' gradientDuoTone='purpleToPink'>
        {isLoading ? "Loading..." : 'Login'}
      </Button>

    </form>
  )
}

export default LoginForm