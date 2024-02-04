
const Experience = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-md shadow-md">
      {/* University of Windsor */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-bold">Graduate Student</h2>
        </div>
        <p className="text-sm text-gray-500">University of Windsor - Windsor, Ontario, Canada</p>
        <p className="text-sm text-gray-500">Jan 2023 - Present · 1 yr 2 mos</p>
      </div>

      {/* TOPS Technologies */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-bold">React Developer (Internship)</h2>
        </div>
        <p className="text-sm text-gray-500">TOPS Technologies Pvt. Ltd - Ahmedabad</p>
        <p className="text-sm text-gray-500">Nov 2021 - Nov 2022 · 1 yr 1 mo</p>
        <p className="text-sm text-gray-500">Technology Used: ReactJS, NodeJS, Linux, AWS, HTML, CSS, Agile Methodologies</p>
        <ul className="list-disc ml-6">
          <li>Led planning and development of three client projects.</li>
          <li>Managed agile sprints and implemented feedback for enhanced usability.</li>
          <li>Collaborated with a cross-functional team to launch a web application using React and Redux.</li>
          <li>Designed and implemented RESTful API endpoints in NodeJS.</li>
          <li>Conducted regular code reviews to ensure quality and security.</li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap">
          {[
            'Java', 'JavaScript', 'NodeJS', 'ReactJS', 'Python', 'HTML', 'CSS', 'REST API',
            'MySQL', 'MongoDB',
            'Linux', 'Ubuntu', 'Debian', 'Windows',
            'SDLC – Agile methodologies, Waterfall, Iterative, Scrum',
            'Jenkins', 'Circle-CI', 'Ansible', 'AWS Cloud', 'Docker', 'Shell Scripting', 'Git', 'GitHub',
            'Figma', 'AdobeXD'
          ].map((skill, index) => (
            <div key={index} className="bg-amber-400 text-black rounded-full px-4 py-2 m-1">{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
