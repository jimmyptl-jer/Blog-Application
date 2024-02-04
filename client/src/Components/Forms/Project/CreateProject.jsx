import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { Button } from "flowbite-react";

import { useAppContext } from "../../../Context/AppContext";
import * as apiClient from '../../../http'

const CreateProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { showToast } = useAppContext()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(apiClient.addProject, {
    onSuccess: () => {
      showToast({ message: "Project Saved Saved", type: "SUCCESS" });
      navigate("/");
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
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold mb-3">Add New Project</h1>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Title
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("title", { required: "This field is required" })}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          GitHub Url
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("gitUrl", { required: "This field is required" })}
          />
          {errors.gitUrl && (
            <span className="text-red-500">{errors.gitUrl.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Description
          <textarea
            rows={5}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("description", { required: "This field is required" })}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </label>

        <label className="text-gray-700 text-sm font-bold flex-1">
          Technologies
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("technology")}
            placeholder="Enter technologies separated by commas"
          />
          {/* You can add validation for technologies if needed */}
        </label>


        <Button type='submit' gradientDuoTone='purpleToPink' disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create'}
        </Button>

      </div>
    </form>
  );
};

export default CreateProject;
