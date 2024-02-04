import CreateProject from '../Components/Forms/Project/CreateProject';

const AddProject = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Create a Project
      </h1>
      <CreateProject />
    </div>
  );
};

export default AddProject;
