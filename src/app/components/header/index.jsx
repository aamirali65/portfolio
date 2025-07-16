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

      {/* Desktop GitHub Button */}
      <a
        href="https://github.com/aamirali65"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:block p-3 bg-blue-600 text-white rounded-3xl px-5 hover:bg-blue-500 transition-all"
      >
        Github Profile
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
