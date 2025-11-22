'use client';
import React from 'react'

const Footer = () => {
  return (
    <main className='bg-primary py-8'>
      <div id="footer" className='flex flex-col justify-center items-center text-center'>
        <h1 className='font-body text-blue-600 font-medium text-3xl font-stock'>Aamir Almani</h1>
        
        {/* Navigation Links */}
        <div 
          id="list" 
          className="flex flex-wrap justify-center text-white gap-3 md:gap-14 my-7 mx-2 font-stock"
        >
          <a href="#about" className='font-body text-[14px] md:text-xl hover:text-blue-500 whitespace-nowrap'>About</a>
          <a href="#skill" className='font-body text-[14px] md:text-xl hover:text-blue-500 whitespace-nowrap'>Skills</a>
          <a href="#project" className='font-body text-[14px] md:text-xl hover:text-blue-500 whitespace-nowrap'>Projects</a>
          <a href="#experience" className='font-body text-[14px] md:text-xl hover:text-blue-500 whitespace-nowrap'>Experience</a>
          <a href="#contact" className='font-body text-[14px] md:text-xl hover:text-blue-500 whitespace-nowrap'>Contact ME 🚀</a>
        </div>

        {/* Social Icons */}
        <div id="list" className="flex flex-wrap justify-center text-white gap-10 my-2">
          <a href="https://www.facebook.com/aamir.almani.65" target='_blank' rel="noreferrer" className='font-body text-xl hover:text-blue-500 fa fa-facebook-square'></a>
          <a href="https://twitter.com/aamir_almani65" target='_blank' rel="noreferrer" className='font-body text-xl hover:text-blue-400 fa fa-twitter'></a>
          <a href="https://github.com/aamirali65" target='_blank' rel="noreferrer" className='font-body text-xl hover:text-gray-600 fa fa-github'></a>
          <a href="https://www.linkedin.com/in/aamirali65/" target='_blank' rel="noreferrer" className='font-body text-xl hover:text-blue-500 fa fa-linkedin-square'></a>
          <a href="https://www.instagram.com/aamir._.65/" target='_blank' rel="noreferrer" className='font-body text-xl hover:text-pink-500 fa fa-instagram'></a>
        </div>

        <span className='font-stock text-white mt-10 font-body md:px-0 px-2'>
          © 2024 Aamir Almani. All rights reserved.
        </span>
      </div>
    </main>
  )
}

export default Footer
