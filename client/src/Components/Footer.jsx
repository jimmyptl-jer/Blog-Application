import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGithub, BsMedium, BsLinkedin } from 'react-icons/bs';

import GrayWolf from '../assets/graywolf.svg'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-slate-700'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <img
                src={GrayWolf}
                alt="Logo"
                className="md:w-60 md:h-60 object-contain justify-center w-20 h-20"
              />
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.jimmytechhub.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  JimmyTechHub.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow Me' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/jimmyptl-jer'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href='https://www.linkedin.com/in/jimmy-patel-b09311160'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href='https://medium.com/@jimmyptl46'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Medium
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Jimmy ManojKumar Patel"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.linkedin.com/in/jimmy-patel-b09311160/' icon={BsLinkedin} />
            <Footer.Icon href='https://www.github.com/jimmyptl-jer' icon={BsGithub} />
            <Footer.Icon href="https://medium.com/@jimmyptl46" icon={BsMedium} />

          </div>
        </div>
      </div>
    </Footer>
  );
} 