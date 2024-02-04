import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as apiClient from '../../http'
import { useAppContext } from '../../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'flowbite-react'

const ContactForm = () => {
  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate } = useMutation(apiClient.contact, {
    onSuccess: () => {
      showToast({ message: "See you soon..", type: "SUCCESS" });
      navigate('/');
    },
    onError: () => showToast({ message: "Sorry! Something went wrong", type: "ERROR" })
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    mutate(data);
  });

  return (
    <form className='flex flex-col gap-5' onSubmit={onSubmit}>
      <label className='text-gray-700 text-sm font-bold flex-1'>
        Name
        <input
          className='border rounded w-full py-1 px-2 font-normal'
          type='text'
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type='email'
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Phone Number
        <input
          type='text'
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("phone", { required: "This field is required" })}
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Message
        <textarea
          rows={5}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("message", { required: "This field is required" })}
        ></textarea>
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </label>

      <Button type='submit' gradientDuoTone='purpleToPink'>
        Contact
      </Button>
    </form>
  );
}

export default ContactForm;
