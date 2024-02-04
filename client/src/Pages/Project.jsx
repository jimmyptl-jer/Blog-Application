import { useState } from 'react';
import { useQuery } from 'react-query';

import * as apiClient from '../http';
import ProjectComp from '../Components/ProjectComp';

const Project = () => {
  const [projects, setProjects] = useState([]);

  const { data: fetchProjects, isLoading } = useQuery('fetchProjects', apiClient.fetchProjects, {
    onSuccess: (data) => {
      setProjects(data);
    },
  });

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Projects</h1>

      {isLoading ? (
        <p>Loading projects...</p>
      ) : (
        <ProjectComp projects={projects} />
      )}
    </div>
  );
};

export default Project;
