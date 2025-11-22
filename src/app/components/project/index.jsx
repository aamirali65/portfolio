'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState(9);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const projects = [ 
    {
      img: "/assets/img/project/doc.png",
      skills:['Flutter','Provider', 'Supabase'],
      title:'DocScan - Document Scanner',
      date:'Oct 25 - Nov 2025',
      description:"DocScan is an open-source Flutter app that lets you scan documents, recognize text, and edit it instantly using Google ML Kit Text Recognition.",
      url:'https://github.com/aamirali65/docscanner'
    },
    {
      img: "/assets/img/project/job.png",
      skills:['Flutter','Provider', 'Supabase'],
      title:'hireMe - Job Portal',
      date:'Aug 25 - Sep 2025',
      description:"hireMe is an open source job portal built with Flutter and Supabase. It provides a simple yet powerful platform for job seekers and recruiters to connect in real time.",
      url:'https://github.com/aamirali65/hireMe-JobPortal-Flutter'
    },
    {
      
      img: "/assets/img/project/currency.jpg",
      skills:['Flutter','Provider', 'Firebase'],
      title:'CurrenSee - Currency Converter',
      date:'Oct 24 - Dec 2024',
      description:"A modern currency converter app built with Flutter. This app allows users to convert currencies, view the latest currency news, check historical exchange rates, and log in securely using authentication.",
      url:'https://github.com/aamirali65/CurrenSee-currency-converter-app'
    },
    {
      img: "/assets/img/project/bidding.jpg",
      skills:['Flutter','Provider', 'Supabase'],
      title:'GoBidder - Auction App',
      date:'April 25 - June 2025',
      description:"A real-time Bidding Auction App built with Flutter and Supabase, featuring role-based authentication for buyers and sellers, live bidding functionality, and a clean, responsive UI.",
      url:'https://github.com/aamirali65/bidding-app-flutter'
    },
    {
      img: "/assets/img/project/code.png",
      skills:['Next.js','Gemini', 'RestAPI'],
      title:'Code Converter',
      date:'Sept 25 - Oct 2025',
      description:"A powerful code conversion tool built with Next.js, designed to seamlessly transform code snippets between different programming languages and formats.",
      url:'https://github.com/aamirali65/code-converter'
    },
    {
      img: "/assets/img/project/safe.png",
      skills: ['ReactJS', 'Tailwind CSS'],
      title: 'SafeCode - Password Generator',
      date: 'November 2024 - December 2024',
      description: "SafeCode is a simple and secure password generator built using ReactJS and Tailwind CSS. It allows users to generate strong, customizable passwords instantly with options for length and character types, ensuring better online security.",
      url: 'https://aamirali65.github.io/SafeCode-Password-Generator'
    },
    {
      img: "/assets/img/project/pick.png",
      skills: ['ReactJS', 'CSS', 'Cookies', 'Dark Mode'],
      title: 'PickPal - Color Picker Tool',
      date: 'December 2024 - January 2025',
      description: "PickPal is a modern, user-friendly color picker tool built with React. It helps users find, save, and explore colors for their projects, with features like intelligent color suggestions, dark mode, and cookie consent management.",
      url: 'https://aamirali65.github.io/PickPal/'
    },
    {
      img: "/assets/img/project/movie.png",
      skills: ['ReactJS', 'Vite', 'TMDb API'],
      title: 'ReactJS Movies Library',
      date: 'January 2025 - February 2025',
      description: "This project is a responsive movie library web app built using ReactJS and Vite, integrating TMDb API to fetch popular titles, provide search functionality, and display movie details, all wrapped in a clean and intuitive UI.",
      url: 'https://aamirali65.github.io/ReactJS-Movies-Library/'
    },
    {
      img: "/assets/img/project/ecomerce.jpg",
      skills: ['Flutter', 'Firebase', 'Admin Panel', 'REST API'],
      title: 'Flutter E-commerce App',
      date: 'August 2023 - October 2023',
      description: "A complete full-stack e-commerce mobile app built in Flutter, featuring an admin panel, product management, user authentication, payment integration, and smooth UI/UX. The app is available on the Play Store for live testing.",
      url: 'https://play.google.com/store/apps/details?id=com.scissorsdoctor.store'
    },
    {
      img: "/assets/img/project/quiz.png",
      skills: ['ReactJS', 'Tailwind CSS'],
      title: 'ReactJS Quiz App',
      date: 'May 2023 - June 2023',
      description: "A responsive and engaging web-based quiz application built with ReactJS, featuring multiple categories and interactive feedback to test users’ knowledge across various topics. Easily extendable for more content.",
      url: 'https://aamirali65.github.io/ReactJS-QuizApp/'
    },
    {
      img: "/assets/img/project/chatbot.png",
      skills: ['Flutter', 'Gemini AI', 'Chatbot'],
      title: 'Flutter ChatBot AI',
      date: 'February 2023 - March 2023',
      description: "This Flutter project is a smart chatbot powered by Gemini AI, allowing users to interact via natural language. It uses machine learning responses for a conversational and intuitive user experience.",
      url: 'https://github.com/aamirali65/Flutter-ChatBot'
    },
    {
      img: "/assets/img/project/ecc.png",
      skills: ['Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      title: 'Full Stack E-commerce (MERN)',
      date: 'July 2025',
      description: "A complete full-stack e-commerce website built using the MERN stack with Next.js for the frontend and Node.js + MongoDB for the backend. Features include user authentication (JWT), product management, cart functionality, order tracking, and a clean responsive UI with Tailwind CSS.",
      url: 'https://github.com/aamirali65/Full-Stack-Ecommerce-Next.js'
    },    
    {
      img: "/assets/img/project/start.png",
      skills: ['ReactJS', 'Gemini API', 'Tailwind CSS'],
      title: 'Startup Name Generator - Gemini',
      date: 'December 2024 - January 2025',
      description: "A creative AI-powered name generator that uses Gemini APIs to generate unique and brandable startup names based on user inputs and categories, with a sleek, responsive UI built in React.",
      url: 'https://aamirali65.github.io/startup-name-generator-Gemini/'
    },
    {
      img: "/assets/img/project/admin.png",
      skills: ['Next.js', 'Tailwind CSS', 'Chart.js', 'Firebase'],
      title: 'Admin Dashboard - Next.js',
      date: 'July 2025',
      description: "A modern and customizable Admin Dashboard built with Next.js and Tailwind CSS. It includes real-time analytics, user management, chart visualizations, and Firebase integration. Designed to be lightweight and fast.",
      url: 'https://github.com/aamirali65/AdminDashboard-Next.js'
    },    
    {
       img: "/assets/img/project/imag1.png",
      skills:['Angular','Node Js','Laravel','Figma'],
      title:'Admin Dashboard',
      date:'March 2 - May 2024',
      description:"Our Angular Admin Dashboard is a powerful and intuitive web application designed to provide administrators with the tools they need to manage and monitor their systems efficiently. Built using Angular, a popular front-end framework, our admin dashboard offers a seamless user experience with dynamic and responsive UI components.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag2.png",
      skills:['Html','Css','Javascript', 'Bootstrap'],
      title:'NexaSelf Crypto',
      date:'March 4 - March 2024',
      description:"Nexaself is a comprehensive cryptocurrency portfolio manager designed to help cryptocurrency investors track, manage, and analyze their cryptocurrency investments with ease. With powerful features and an intuitive interface, Nexaself makes it easy to stay informed about your cryptocurrency portfolio and make informed investment decisions.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag3.png",
      skills:['Laravel','Javascript','Bootstrap', 'Html'],
      title:'Filmbaily',
      date:'April 28 - May 2024',
      description:"Filmbaily showcasing the creativity of a close-knit group of friends working together to produce visually stunning content.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag4.png",
      skills:['Angular','Laravel','Postman', 'Bootstrap'],
      title:'Marksman',
      date:'Aug 24 - Sept 2024',
      description:"At Marksman Arena, we are dedicated to providing a fun and safe experience for players of all ages. We pride ourselves on our exceptional customer service. Not only do we offer a great game, but we also make it easy for you to connect with other players in your locale. We are always looking for ways to improve and enhance the experience.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag5.png",
      skills:['Angular','Laravel','Javascript', 'MySQl'],
      title:'Technologenesis',
      date:'July 19 - Aug 2024',
      description:"Technologenesis we are passionate about leveraging the latest technologies to create cutting-edge software solutions that drive business growth and success.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag6.png",
       skills:['Html','Css','Javascript', 'Bootstrap'],
      title:'Sweitzer Psychology',
      date:'Dec 21 - Dec 2023',
      description:"Switzer-Psychology your online destination for compassionate and effective mental health support. At Switzer-Psychology, we understand that taking care of your mental health is essential, and we're here to support you every step of the way",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag7.png",
      skills:['Html','Bootstrap','PHP', 'MySQl'],
      title:'PHP Care',
      date:'Sept 10 - Nov 2023',
      description:"PHP Care we are committed to providing high-quality, patient-centered care in a warm and welcoming environment. Our team of experienced healthcare professionals is dedicated to meeting your healthcare needs with compassion and expertise.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
    {
       img: "/assets/img/project/imag8.png",
      skills:['Angular','Bootstrap','Laravel', 'Css'],
      title:'Filmpedia',
      date:'Jun 12 - July 2023',
      description:"Filmpedia your ultimate destination for watching a wide range of online movies from different genres and languages. With Filmpedia, you can stream your favorite movies anytime, anywhere, without any hassle.",
      url:'https://github.com/aamirali65/Portfolio-ReactJS'
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLoadMore = () => {
    const newVisibleProjects = visibleProjects + 6;
    setVisibleProjects(newVisibleProjects);
    
    if (newVisibleProjects >= projects.length) {
      setShowLoadMore(false);
    }

    AOS.refresh();
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className='bg-primary pt-10 pb-10' id='project'>
      <div id="title" className='text-center'>
        <h1 className='font-bold text-white font-body text-5xl mb-3 font-stock'>Projects!</h1>
        <p className='font-body text-gray-500 mx-5 md:mx-20'>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
        <div className="main mx-5 mt-5 md:mx-10 lg:mx-40 flex flex-wrap justify-between" data-aos="fade-up">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index} 
              onClick={() => handleProjectClick(project.url)}
              className="project-card w-full md:w-[48%] lg:w-[32%] p-4 rounded-lg border border-blue-500 mt-5 anime" 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
            >
              <Image src={project.img} alt={project.title} width={400} height={250} className='rounded-[10px] h-[180px] object-cover'/>
              <div className="tech flex flex-wrap text-blue-700 gap-2 mt-5 font-body">
                {project.skills.map((skill, index) => (
                  <span key={index} className='bg-[#231E36] rounded-3xl py-1 px-2 text-[11px]'>{skill}</span>
                ))}
              </div>
              <div id="detail" className='text-start flex flex-col gap-2 font-body my-3'>
                <h1 className='text-2xl text-gray-400 font-semibold'>{project.title}</h1>
                <h3 className='text-gray-600 text-sm'>{project.date}</h3>
                <span className='text-gray-500 overflow-hidden line-clamp-3'>{project.description}</span>
              </div>
            </div>
          ))}
        </div>
        {showLoadMore && (
          <div className="mt-8" data-aos="fade-up">
            <button 
              onClick={handleLoadMore}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default Project;
