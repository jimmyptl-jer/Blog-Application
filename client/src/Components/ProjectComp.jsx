import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const ProjectComp = ({ projects }) => {
  return (
    <div className="grid grid-cols-1  gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-md p-6 rounded-md mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-amber-500">{project.title}</h2>
          </div>

          <p className="mb-4">{project.description}</p>

          {project.gitUrl && (
            <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-md">
                <FaGithub className="mr-2" />
                View on GitHub
              </button>
            </a>
          )}

          {project.technology && project.technology.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold">Technology</p>
              <ul>
                {project.technology.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ProjectComp.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      gitUrl: PropTypes.string,
      technology: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default ProjectComp;
