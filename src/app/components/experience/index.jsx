'use client';
import React from 'react';
import Image from 'next/image';
import GlareHover from '../blitz/card';

const experiences = [
    {
        company: 'Aptech Gulshan Hadeed',
        role: 'Visiting Faculty',
        period: 'Sept 2025 - Present',
        location: 'On-Site',
        img: '/assets/img/companies/aptech.jpg',
        description: 'Delivered hands-on instruction in cross-platform mobile app development using Flutter and Dart. Guided students through integrating Firebase and Supabase for authentication, real-time data syncing, and backend management. Worked closely with UI/UX concepts to help build responsive, smooth, and user-friendly mobile interfaces. Emphasized best practices in app performance optimization and continuous deployment using CI/CD pipelines.',
        skills: ['HTML', 'CSS', 'Javascript', 'PHP', 'Flutter', 'React.js', 'Next.js', 'Firebase', 'Dart', 'Laravel']
      },      
    {
        company: 'Zilo Digital',
        role: 'Flutter Developer',
        period: 'Feb 2025 - Present 5 Month',
        location: 'Hybrid',
        img: '/assets/img/companies/1.png',
        description: 'Built and maintained cross-platform mobile applications using Flutter and Dart. Integrated Firebase and Supabase for authentication, real-time data, and backend services. Collaborated with UI/UX teams to implement responsive and performant mobile interfaces. Optimized app performance and deployed updates with CI/CD workflows.',
        skills: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'RESTful API', 'GetX', 'Bloc', 'Figma', 'CI/CD', 'Android Studio']
      },      
      {
        company: 'Technologenesis LTD',
        role: 'Angular Developer',
        period: 'Aug 2023 - Jan 2025 . 1 year 6 months',
        location: 'On-Site',
        img: '/assets/img/companies/2.jpg',
        description: 'Developed dynamic and responsive web applications using Angular. Collaborated closely with backend teams to integrate RESTful APIs. Implemented reusable components, optimized UI performance, and ensured cross-browser compatibility.',
        skills: ['Angular', 'TypeScript', 'TailwindCSS', 'RESTful APIs', 'Responsive Design']
      },
      {
        company: 'Technologenesis LTD',
        role: 'Frontend Developer - Internship',
        period: 'June 2023 - Aug 2023 . 3 months',
        location: 'On-Site',
        img: '/assets/img/companies/2.jpg',
        description: 'Assisted in building and testing UI components using Angular. Participated in code reviews and collaborated on bug fixes and feature enhancements. Gained practical experience in agile development and version control.',
        skills: ['Angular', 'HTML', 'CSS', 'Git', 'GitHub', 'Team Collaboration']
      }
      
];

const Experience = () => {
  return (
    <main className="bg-primary py-12 px-2 md:px-10 lg:px-40" id="experience">
     <div id="title" className='text-center'>
        <h1 className='font-bold text-white font-body text-5xl mb-3 font-stock'>Experience!</h1>
        <p className='font-body text-gray-500 mx-5 md:mx-20'>I've had the opportunity to gain valuable experience as a software developer, both as a freelancer and as an open-source contributor. Below is a summary of my work and the skills I've developed along the way.</p>
        <div className="mt-20 relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-700 rounded-full -translate-x-1/2 z-0"></div>
          <div className="flex flex-col gap-16 w-full">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex w-full items-center">
                  {/* Desktop: alternate left/right, Mobile: always center */}
                  <div className={`flex-1 hidden md:flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                    data-aos={isLeft ? 'fade-right' : 'fade-left'}
                    data-aos-delay={idx * 100}
                  >
                    {isLeft && (
                      <ExperienceCard exp={exp} align="right" />
                    )}
                  </div>
                  {/* Timeline dot and connector */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-6 h-6 bg-white border-4 border-blue-700 rounded-full shadow-lg"></div>
                    {idx !== experiences.length - 1 && (
                      <div className="flex-1 w-1 bg-blue-700 min-h-[40px]"></div>
                    )}
                  </div>
                  <div className={`flex-1 hidden md:flex ${!isLeft ? 'justify-start' : 'justify-end'}`}
                    data-aos={!isLeft ? 'fade-left' : 'fade-right'}
                    data-aos-delay={idx * 100}
                  >
                    {!isLeft && (
                      <ExperienceCard exp={exp} align="left" />
                    )}
                  </div>
                  {/* On mobile, always show the card below the dot */}
                  <div className="flex-1 md:hidden flex justify-center mt-8"
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <ExperienceCard exp={exp} align="center" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
const ExperienceCard = ({ exp, align }) => (
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
    className={`
      w-full max-w-lg
      ${align === 'right' ? 'mr-8' : ''}
      ${align === 'left' ? 'ml-8' : ''}
    `}
  >
    <div
      className={`
        bg-transparent border-2 border-blue-700 outline-none rounded-lg shadow-xl p-6 md:p-8 w-full max-w-lg
        ${align === 'right' ? 'text-right' : ''}
        ${align === 'left' ? 'text-left' : ''}
        ${align === 'center' ? 'text-center' : ''}
      `}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white font-body mb-1">{exp.role}</h3>
      <div className={`flex flex-wrap items-center gap-2 mb-2 ${align === 'right' ? 'justify-end' : align === 'left' ? 'justify-start' : 'justify-center'}`}>
        <span className="flex items-center gap-2">
          <Image
            src={exp.img}
            alt={exp.company + ' logo'}
            width={100}
            height={100}
            className="w-10 h-10 rounded-full object-cover bg-white"
          />
          <span className="text-white font-body text-base md:text-lg font-medium">{exp.company}</span>
        </span>
        <span className="text-blue-200 text-xs md:text-sm">&bull;</span>
        <span className="text-blue-200 text-xs md:text-sm">{exp.location}</span>
      </div>
      <span className="inline-block bg-white/20 text-white text-xs md:text-sm rounded-full px-3 py-1 mb-3 font-body border border-blue-200">
        {exp.period}
      </span>
      <p className="text-blue-100 font-body text-sm md:text-base mb-3">
        {exp.description}
      </p>
      <div className={`flex flex-wrap gap-2 ${align === 'right' ? 'justify-end' : align === 'left' ? 'justify-start' : 'justify-center'}`}>
        {exp.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-800 text-blue-200 px-3 py-1 rounded-2xl text-xs md:text-sm font-body border border-blue-600 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </GlareHover>
);


export default Experience;
