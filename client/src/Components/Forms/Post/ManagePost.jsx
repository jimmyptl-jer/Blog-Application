import { useForm } from 'react-hook-form';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import * as apiClient from '../../../http'
import { postTypes } from '../../../Config/post-types'
import { useAppContext } from '../../../Context/AppContext';

const ManagePost = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(apiClient.addPost, {
    onSuccess: () => {
      showToast({ message: "Post Saved", type: "SUCCESS" });
      navigate("/post");
    },
    onError: () => {
      showToast({ message: "Failed to save Post.", type: "ERROR" });
    },
  });



  const onSubmit = handleSubmit((data) => {
    console.log(data);
    mutate(data)
  });

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Title
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("title", { required: "This field is required" })}
          ></input>
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Author
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("author", { required: "This field is required" })}
          ></input>
          {errors.author && (
            <span className="text-red-500">{errors.author.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Description
          <textarea
            rows={10}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("description", { required: "This field is required" })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </label>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-3">Category</h2>
        <div className="grid grid-cols-5 gap-3">
          {postTypes.map((type) => (
            <label className="text-sm flex gap-1 text-gray-700" key={type}>
              <input
                type="checkbox"
                value={type}
                {...register("category", {
                  validate: (type) => {
                    if (type && type.length > 0) {
                      return true;
                    } else {
                      return "At least one category is required";
                    }
                  },
                })}
              />
              {type}
            </label>
          ))}
        </div>
        {errors.category && (
          <span className="text-red-500 text-sm font-bold">
            {errors.category.message}
          </span>
        )}
      </div>

      {/* <div>
        <h2 className="text-2xl font-bold mb-3">Images</h2>
        <div className='border rounded p-4 flex flex-col gap-4'>
          <input
            type='file'
            accept='image/*'
            className='w-full text-gray-700 font-normal'
            {...register("image", {
              validate: (imageFiles) => {
                const totalLength =
                  imageFiles.length;

                if (totalLength === 0) {
                  return "At least one image should be added";
                }

                if (totalLength > 6) {
                  return "Total number of images cannot be more than 6";
                }

                return true;
              },
            })} />
        </div>

        {errors.image && (
          <span className="text-red-500 text-sm font-bold">
            {errors.image.message}
          </span>
        )}
      </div> */}

      <Button type='submit' gradientDuoTone='purpleToPink' disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </Button>

    </form>
  );
};

export default ManagePost;
