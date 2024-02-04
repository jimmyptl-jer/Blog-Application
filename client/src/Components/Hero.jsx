import Profile from '../assets/graywolf.svg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className=" text-amber-600 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
      <div className="text-center md:text-left md:w-1/2">
        <p className="text-2xl md:text-3xl font-semibold mb-2">Hey, I am Jimmy</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          <span className="text-chocolate">Full Stack</span>
          <br />
          Developer
        </h1>
        <p className="text-base md:text-lg mb-6">
          A web developer with a passion for creating user-friendly and responsive websites.
          <br />
          Site is Currently Under construction; this is the development version.
        </p>
        <button
          type="button"
          onClick={() => navigate('/contact')}
          className="btn-primary rounded-md border text-amber-700 justify-center md:justify-start inline-block px-5 py-3 font-normal text-base cursor-pointer text-center transition duration-500 bg-chocolate hover:bg-black hover:text-amber-800 hover:font-bold"
        >
          Get In Touch
        </button>
      </div>

      <div className="hidden md:flex w-1/2 justify-center items-center">
        <img src={Profile} alt="profile Img" className="w-80 h-80 " />
      </div>
    </div>
  );
};

export default Hero;
