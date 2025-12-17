import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    img: "/assets/img/project/portal.png",
    skills: ['Flutter', 'Provider', 'Supabase','DSA'],
    title: 'UniTrack - University Portal App',
    date: 'Oct 25 - Nov 2025',
    description: "UniTrack is a university portal app that allows students and teachers to manage their courses, assignments, and other academic activities. It is built with Flutter and Supabase.",
    url: 'https://github.com/aamirali65/unitrack'
  },
  {
    img: "/assets/img/project/doc.png",
    skills: ['Flutter', 'Provider', 'Supabase'],
    title: 'DocScan - Document Scanner',
    date: 'Oct 25 - Nov 2025',
    description: "DocScan is an open-source Flutter app that lets you scan documents, recognize text, and edit it instantly using Google ML Kit Text Recognition.",
    url: 'https://github.com/aamirali65/docscanner'
  },
  {
    img: "/assets/img/project/job.png",
    skills: ['Flutter', 'Provider', 'Supabase'],
    title: 'hireMe - Job Portal',
    date: 'Aug 25 - Sep 2025',
    description: "hireMe is an open source job portal built with Flutter and Supabase. It provides a simple yet powerful platform for job seekers and recruiters to connect in real time.",
    url: 'https://github.com/aamirali65/hireMe-JobPortal-Flutter'
  },
  {
    img: "/assets/img/project/currency.jpg",
    skills: ['Flutter', 'Provider', 'Firebase'],
    title: 'CurrenSee - Currency Converter',
    date: 'Oct 24 - Dec 2024',
    description: "A modern currency converter app built with Flutter. This app allows users to convert currencies, view the latest currency news, check historical exchange rates, and log in securely using authentication.",
    url: 'https://github.com/aamirali65/CurrenSee-currency-converter-app'
  },
  {
    img: "/assets/img/project/bidding.jpg",
    skills: ['Flutter', 'Provider', 'Supabase'],
    title: 'GoBidder - Auction App',
    date: 'April 25 - June 2025',
    description: "A real-time Bidding Auction App built with Flutter and Supabase, featuring role-based authentication for buyers and sellers, live bidding functionality, and a clean, responsive UI.",
    url: 'https://github.com/aamirali65/bidding-app-flutter'
  },
  {
    img: "/assets/img/project/code.png",
    skills: ['Next.js', 'Gemini', 'RestAPI'],
    title: 'Code Converter',
    date: 'Sept 25 - Oct 2025',
    description: "A powerful code conversion tool built with Next.js, designed to seamlessly transform code snippets between different programming languages and formats.",
    url: 'https://github.com/aamirali65/code-converter'
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
    description: "A responsive and engaging web-based quiz application built with ReactJS, featuring multiple categories and interactive feedback to test users' knowledge across various topics. Easily extendable for more content.",
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
    skills: ['Next.js', 'Tailwind CSS', 'Node.js', 'JWT'],
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
    skills: ['Angular', 'Node Js', 'Laravel', 'Figma'],
    title: 'Admin Dashboard',
    date: 'March 2 - May 2024',
    description: "Our Angular Admin Dashboard is a powerful and intuitive web application designed to provide administrators with the tools they need to manage and monitor their systems efficiently. Built using Angular, a popular front-end framework, our admin dashboard offers a seamless user experience with dynamic and responsive UI components.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag2.png",
    skills: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    title: 'NexaSelf Crypto',
    date: 'March 4 - March 2024',
    description: "Nexaself is a comprehensive cryptocurrency portfolio manager designed to help cryptocurrency investors track, manage, and analyze their cryptocurrency investments with ease. With powerful features and an intuitive interface, Nexaself makes it easy to stay informed about your cryptocurrency portfolio and make informed investment decisions.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag3.png",
    skills: ['Laravel', 'Javascript', 'Bootstrap', 'Html'],
    title: 'Filmbaily',
    date: 'April 28 - May 2024',
    description: "Filmbaily showcasing the creativity of a close-knit group of friends working together to produce visually stunning content.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag4.png",
    skills: ['Angular', 'Laravel', 'Postman', 'Bootstrap'],
    title: 'Marksman',
    date: 'Aug 24 - Sept 2024',
    description: "At Marksman Arena, we are dedicated to providing a fun and safe experience for players of all ages. We pride ourselves on our exceptional customer service. Not only do we offer a great game, but we also make it easy for you to connect with other players in your locale. We are always looking for ways to improve and enhance the experience.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag5.png",
    skills: ['Angular', 'Laravel', 'Javascript', 'MySQl'],
    title: 'Technologenesis',
    date: 'July 19 - Aug 2024',
    description: "Technologenesis we are passionate about leveraging the latest technologies to create cutting-edge software solutions that drive business growth and success.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag6.png",
    skills: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    title: 'Sweitzer Psychology',
    date: 'Dec 21 - Dec 2023',
    description: "Switzer-Psychology your online destination for compassionate and effective mental health support. At Switzer-Psychology, we understand that taking care of your mental health is essential, and we're here to support you every step of the way",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag7.png",
    skills: ['Html', 'Bootstrap', 'PHP', 'MySQl'],
    title: 'PHP Care',
    date: 'Sept 10 - Nov 2023',
    description: "PHP Care we are committed to providing high-quality, patient-centered care in a warm and welcoming environment. Our team of experienced healthcare professionals is dedicated to meeting your healthcare needs with compassion and expertise.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
  {
    img: "/assets/img/project/imag8.png",
    skills: ['Angular', 'Bootstrap', 'Laravel', 'Css'],
    title: 'Filmpedia',
    date: 'Jun 12 - July 2023',
    description: "Filmpedia your ultimate destination for watching a wide range of online movies from different genres and languages. With Filmpedia, you can stream your favorite movies anytime, anywhere, without any hassle.",
    url: 'https://github.com/aamirali65/Portfolio-ReactJS'
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Auto-detect project type based on skills
  const projectType = project.skills.some(skill => 
    skill.toLowerCase().includes('flutter')
  ) ? 'mobile' : 'web';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
              {projectType === 'mobile' ? (
                <>
                  <Smartphone size={12} />
                  Mobile
                </>
              ) : (
                <>
                  <Globe size={12} />
                  Web
                </>
              )}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mb-3">{project.date}</p>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 bg-primary/10 text-xs text-primary rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
            <Button variant="glow" size="sm" asChild className="flex-1">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const [visibleCount, setVisibleCount] = useState(6);
  const projectsToShow = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my expertise in 
            web and mobile development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleShowMore}
              className="px-8"
            >
              Show More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
