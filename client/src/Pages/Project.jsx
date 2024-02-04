import { useState, useEffect } from 'react';
import * as apiClient from '../http';
import ProjectComp from '../Components/ProjectComp';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiClient.fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
