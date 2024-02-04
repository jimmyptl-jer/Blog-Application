import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
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
  );
};

export default DetailsSection;