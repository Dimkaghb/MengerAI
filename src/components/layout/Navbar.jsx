import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/mengerlogo.png';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700';
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">

            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
            >
              Features
            </a>
            <Link 
              to="/competition" 
              className={`${isActive('/competition')} hover:text-indigo-600 transition-colors duration-200`}
            >
              Competitions
            </Link>
            <a 
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
            >
              How It Works
            </a>
            <Link 
              to="/signup" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          <div className="sm:hidden">
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" />
                    )}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#features"
                            onClick={(e) => scrollToSection(e, 'features')}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Features
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/competition"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm ${isActive('/competition')}`}
                          >
                            Competitions
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#how-it-works"
                            onClick={(e) => scrollToSection(e, 'how-it-works')}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            How It Works
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/signup"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-indigo-600 font-medium`}
                          >
                            Get Started
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 