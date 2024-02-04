import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as apiClient from '../../http'
import { useAppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { signInStart, signInSuccess } from '../../store/user-slice'

const SignUpForm = () => {

  const { showToast } = useAppContext()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { mutate, isLoading } = useMutation(apiClient.register, {
    onSuccess: () => {
      dispatch(signInStart())
      showToast({ message: "Register Successful", type: "SUCCESS" });
      navigate('/sign-in');
    },
    onError: () => showToast({ message: "Sorry! Something went wrong", type: "ERROR" })

  })
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    dispatch(signInSuccess(data))
    mutate(data)
  })

  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
      <h2 className='text-3xl font-bold'>Create an Account</h2>
      <div className='flex flex-col md:flex-row gap-5'>
        <label className='text-gray-700 text-sm font-bold flex-1'>First Name
          <input
            className='border rounded py-1 px-2 font-normal'
            type='text'
            {...register("firstName", { required: "This field is required" })} />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            type='text'
            className='border rounded py-1 px-2 font-normal'
            {...register("lastName", { required: "This field is required" })} />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Username
        <input
          type='text'
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("username", { required: "This field is required" })} />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </label>

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

      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Passwords do not match!";
              }
            },
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>

      <Button type='submit' gradientDuoTone='purpleToPink'>
        {isLoading ? "Registering..." : 'Register'}
      </Button>
    </form>
  )
}

export default SignUpForm