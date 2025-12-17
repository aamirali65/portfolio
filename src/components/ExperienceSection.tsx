import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Visiting Faculty',
    company: 'Aptech Gulshan Hadeed',
    location: 'On-Site',
    period: 'Sept 2025 - Present',
    description: 'Delivered hands-on instruction in cross-platform mobile app development using Flutter and Dart. Guided students through integrating Firebase and Supabase for authentication, real-time data syncing, and backend management. Worked closely with UI/UX concepts to help build responsive, smooth, and user-friendly mobile interfaces. Emphasized best practices in app performance optimization and continuous deployment using CI/CD pipelines.',
    achievements: ['HTML', 'CSS', 'Javascript', 'PHP', 'Flutter', 'React.js', 'Next.js', 'Firebase', 'Dart', 'Laravel'],
    img: '/assets/img/companies/aptech.jpg',
  },
  {
    title: 'Flutter Developer',
    company: 'Zilo Digital',
    location: 'Hybrid',
    period: 'Feb 2025 - Present 5 Month',
    description: 'Built and maintained cross-platform mobile applications using Flutter and Dart. Integrated Firebase and Supabase for authentication, real-time data, and backend services. Collaborated with UI/UX teams to implement responsive and performant mobile interfaces. Optimized app performance and deployed updates with CI/CD workflows.',
    achievements: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'RESTful API', 'GetX', 'Bloc', 'Figma', 'CI/CD', 'Android Studio'],
    img: '/assets/img/companies/1.png',
  },
  {
    title: 'Angular Developer',
    company: 'Technologenesis LTD',
    location: 'On-Site',
    period: 'Aug 2023 - Jan 2025 . 1 year 6 months',
    description: 'Developed dynamic and responsive web applications using Angular. Collaborated closely with backend teams to integrate RESTful APIs. Implemented reusable components, optimized UI performance, and ensured cross-browser compatibility.',
    achievements: ['Angular', 'TypeScript', 'TailwindCSS', 'RESTful APIs', 'Responsive Design'],
    img: '/assets/img/companies/2.jpg',
  },
  {
    title: 'Frontend Developer - Internship',
    company: 'Technologenesis LTD',
    location: 'On-Site',
    period: 'June 2023 - Aug 2023 . 3 months',
    description: 'Assisted in building and testing UI components using Angular. Participated in code reviews and collaborated on bug fixes and feature enhancements. Gained practical experience in agile development and version control.',
    achievements: ['Angular', 'HTML', 'CSS', 'Git', 'GitHub', 'Team Collaboration'],
    img: '/assets/img/companies/2.jpg',
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex justify-center md:justify-start">
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
      
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="absolute left-8 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10 glow"
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-full pl-16 md:w-1/2 md:pl-0 ${
          isLeft ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
        }`}
      >
        <div className="p-6 bg-card border border-border hover:border-primary/50 rounded-2xl transition-all duration-300 group">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Briefcase size={18} />
            <span className="font-semibold">{experience.company}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {experience.title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {experience.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {experience.location}
            </span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.achievements.map((achievement, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2.5 py-1 bg-primary/10 text-xs text-primary rounded-md border border-primary/20"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and the amazing teams I've worked with.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
