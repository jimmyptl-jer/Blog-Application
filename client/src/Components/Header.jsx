import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';

import * as apiClient from '../http';
import { useQuery } from 'react-query';

import GrayWolf from '../assets/graywolf.svg';
import { useAppContext } from '../Context/AppContext';

const Header = () => {
  const { isLogged } = useAppContext();
  const { data: currentUser } = useQuery('fetchCurrentUser', apiClient.fetchCurrentUser, {});

  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
        <img src={GrayWolf} alt="Logo" className="w-20 h-20 object-contain justify-center" />
      </Link>


      <div className="flex gap-2 md:order-2">
        {isLogged ? (
          currentUser ? (
            <Dropdown arrowIcon={false} inline label={<Avatar alt="user" img={GrayWolf} rounded />}>
              <Dropdown.Header>
                <span className='block text-sm'>{currentUser.username}</span>
                <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          ) : null
        ) : (
          <Link to="/sign-in">
            <Button color="warning" outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      {/* Add Navbar.Collapse component */}
      <Navbar.Collapse>
        {/* Wrap each link with Navbar.Link */}
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to="/project">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
