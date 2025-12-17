import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { 
  Code2, 
  Server
} from 'lucide-react';

const frontendSkills = [
  { id: 4, name: 'HTML', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' },
  { id: 5, name: 'CSS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { id: 10, name: 'Tailwind CSS', logoUrl: 'https://files.raycast.com/nwt9ncojkvwmjfkaada8upafvpnu' },
  { id: 2, name: 'Angular JS', logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png' },
  { id: 3, name: 'Next JS', logoUrl: 'https://img.icons8.com/fluent-systems-regular/512/FFFFFF/nextjs.png' },
  { id: 1, name: 'React JS', logoUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' },
  { id: 6, name: 'Bootstrap', logoUrl: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
  { id: 8, name: 'JavaScript', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { id: 9, name: 'TypeScript', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { id: 7, name: 'Material UI', logoUrl: 'data:image/png;base64,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' },
  { id: 12, name: 'Flutter', logoUrl: 'https://cdn-images-1.medium.com/v2/resize:fit:1200/1*5-aoK8IBmXve5whBQM90GA.png' },
  { id: 11, name: 'GSAP', logoUrl: 'https://assets.awwwards.com/awards/avatar/2152182/652d1de29c2e9754617887.png' },
];

const backendSkills = [
  { id: 1, name: 'Node.js', logoUrl: 'https://images.seeklogo.com/logo-png/26/1/node-js-logo-png_seeklogo-269242.png' },
  { id: 2, name: 'Express.js', logoUrl: 'https://res.cloudinary.com/iteam-cloud/image/upload/v1684848374/express_468adcd425.png' },
  { id: 3, name: 'PHP', logoUrl: 'https://pngimg.com/d/php_PNG29.png' },
  { id: 4, name: 'Laravel', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png' },
  { id: 5, name: 'Python', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { id: 6, name: 'Django', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { id: 7, name: 'C++', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png' },
  { id: 8, name: 'Java', logoUrl: 'https://brandlogos.net/wp-content/uploads/2021/11/Java-logo-1-300x416.png' },
  { id: 9, name: 'Dart', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png' },
  { id: 10, name: 'MongoDB', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
  { id: 11, name: 'MySQL', logoUrl: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
  { id: 12, name: 'SQL', logoUrl: 'https://static.vecteezy.com/system/resources/thumbnails/036/044/336/small/sql-database-icon-logo-design-ui-or-ux-app-png.png' },
  { id: 13, name: 'PostgreSQL', logoUrl: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' },
  { id: 14, name: 'Firebase', logoUrl: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
];

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: frontendSkills,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: backendSkills,
    color: 'from-green-500 to-emerald-400',
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex-1 min-w-0"
    >
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="h-full p-4 sm:p-6 flex flex-col items-center bg-card border border-primary/20 hover:border-primary/50 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-5`}>
          <category.icon size={24} className="text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 text-foreground">
          {category.title.replace(' Development', '')}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3 w-full">
          {category.skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="flex border border-border hover:border-primary/50 p-2 sm:p-3 items-center gap-2 sm:gap-3 text-foreground rounded-lg bg-secondary/30 hover:bg-primary/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={skill.logoUrl}
                alt={skill.name}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const SkillsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
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
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies I use to build scalable, 
            performant, and beautiful applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
