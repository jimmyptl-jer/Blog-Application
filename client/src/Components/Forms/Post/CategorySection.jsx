import { useFormContext } from "react-hook-form";
import { postTypes } from "../../../Config/post-types";

const CategorySection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Category</h2>
      <div className="grid grid-cols-5 gap-3">
        {postTypes.map((type) => (
          <label className="text-sm flex gap-1 text-gray-700" key={type}>
            <input
              type="checkbox"
              value={type}
              {...register("post", {
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
      {errors.post && (
        <span className="text-red-500 text-sm font-bold">
          {errors.post.message}
        </span>
      )}
    </div>
  );
};

export default CategorySection;
