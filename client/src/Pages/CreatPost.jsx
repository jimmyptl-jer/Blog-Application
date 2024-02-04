import ManagePost from "../Components/Forms/Post/ManagePost";

const CreatePost = () => {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create a Post
      </h1>
      <ManagePost />
    </div>
  )
}

export default CreatePost;
