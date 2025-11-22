'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex px-5 md:px-5 lg:px-20 p-2 bg-primary justify-between items-center fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/assets/img/logo.png"
          alt="logo"
          width={2000}
          height={2000}
          className="h-12 md:h-14 w-auto object-contain"
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className={`font-stock lg:flex gap-8 px-5 text-white ${isNavOpen ? '' : 'hidden lg:flex'}`}>
        <a href="#about" className="font-body hover:text-blue-700">About</a>
        <a href="#skill" className="font-body hover:text-blue-700">Skills</a>
        <a href="#project" className="font-body hover:text-blue-700">Projects</a>
        <a href="#experience" className="font-body hover:text-blue-700">Experience</a>
        <a href="#contact" className="font-body hover:text-blue-700">Contact ME 🚀</a>
      </div>

      {/* Mobile Menu Icon */}
      <button className="p-2 lg:hidden" onClick={handleClick} aria-label="Toggle Navigation">
        <i className={`fa ${isNavOpen ? 'fa-close' : 'fa-bars'} text-gray-200 text-xl`}></i>
      </button>

      
<a href='https://github.com/aamirali65/' target='_blank' class="hidden lg:flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
  <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
  Github
</a>

      {/* Mobile Dialog */}
      {isNavOpen && (
        <div id="nav-dialog" className="fixed px-5 bg-primary inset-0 p-2 z-50">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/assets/img/logo.png"
                alt="logo"
                width={2000}
                height={2000}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>
            <button className="p-2" onClick={handleClick} aria-label="Close Menu">
              <i className="fa fa-close text-gray-200 text-xl"></i>
            </button>
          </div>

          <div className="mt-6 text-white font-stock">
            <a href="#about" className="font-body m-3 p-3 hover:bg-gray-600 block rounded-lg" onClick={handleClick}>About</a>
            <a href="#skill" className="font-body m-3 p-3 hover:bg-gray-600 block rounded-lg" onClick={handleClick}>Skills</a>
            <a href="#project" className="font-body m-3 p-3 hover:bg-gray-600 block rounded-lg" onClick={handleClick}>Projects</a>
            <a href="#experience" className="font-body m-3 p-3 hover:bg-gray-600 block rounded-lg" onClick={handleClick}>Experience</a>
            <a href="#contact" className="font-body m-3 p-3 hover:bg-gray-600 block rounded-lg" onClick={handleClick}>Contact ME 🚀</a>
            <div className="h-[1px] bg-gray-200 w-full my-5"></div>
            <a
              href="https://github.com/aamirali65"
              target="_blank"
              rel="noopener noreferrer"
              className="my-5 p-3 block lg:hidden bg-blue-600 text-white rounded-lg px-5 w-full hover:bg-blue-500 transition-all"
            >
              Github Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
