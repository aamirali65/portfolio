import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact.aamirali65@gmail.com',
    href: 'mailto:contact.aamirali65@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92-3272527496',
    href: 'tel:+923272527496',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Karachi Sindh, PK',
    href: '#',
  },
];

const ContactSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const formRef = useRef<HTMLFormElement>(null);
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init('JRhvRPTSo0vxkRolk');
  }, []);

  const validateForm = (formData: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    const email = formData.get('to_email') as string;
    const name = formData.get('from_name') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.from_name = 'Name must be at least 2 characters';
    }

    if (!email) {
      errors.to_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.to_email = 'Please enter a valid email address';
    }

    if (!subject || subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      // Send to first template
      await emailjs.sendForm(
        'service_90kspi6',
        'template_xetef42',
        formRef.current,
        'JRhvRPTSo0vxkRolk'
      );

      // Send to second template
      await emailjs.sendForm(
        'service_90kspi6',
        'template_9l1fgvk',
        formRef.current,
        'JRhvRPTSo0vxkRolk'
      );

      setIsSubmitting(false);
      setShowModal(true);
      formRef.current.reset();
      setFormErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card border border-border hover:border-primary/50 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Open for opportunities</p>
                <p>Currently accepting freelance projects and full-time positions.</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-6 lg:p-8 bg-card border border-border rounded-2xl">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                    className={`bg-secondary border-border focus:border-primary ${
                      formErrors.from_name ? 'border-destructive' : ''
                    }`}
                    onChange={() => {
                      if (formErrors.from_name) {
                        setFormErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.from_name;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {formErrors.from_name && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {formErrors.from_name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="to_email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="to_email"
                    name="to_email"
                    type="email"
                    placeholder="Your Email"
                    required
                    autoComplete="off"
                    className={`bg-secondary border-border focus:border-primary ${
                      formErrors.to_email ? 'border-destructive' : ''
                    }`}
                    onChange={() => {
                      if (formErrors.to_email) {
                        setFormErrors(prev => {
                          const newErrors = { ...prev };
                          delete newErrors.to_email;
                          return newErrors;
                        });
                      }
                    }}
                  />
                  {formErrors.to_email && (
                    <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle size={12} />
                      {formErrors.to_email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  autoComplete="off"
                  className={`bg-secondary border-border focus:border-primary ${
                    formErrors.subject ? 'border-destructive' : ''
                  }`}
                  onChange={() => {
                    if (formErrors.subject) {
                      setFormErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.subject;
                        return newErrors;
                      });
                    }
                  }}
                />
                {formErrors.subject && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {formErrors.subject}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  autoComplete="off"
                  className={`bg-secondary border-border focus:border-primary resize-none ${
                    formErrors.message ? 'border-destructive' : ''
                  }`}
                  onChange={() => {
                    if (formErrors.message) {
                      setFormErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.message;
                        return newErrors;
                      });
                    }
                  }}
                />
                {formErrors.message && (
                  <p className="text-xs text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle size={12} />
                    {formErrors.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="glow"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border rounded-2xl p-6 lg:p-8 max-w-md w-full shadow-xl relative"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
                
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                  >
                    <CheckCircle size={32} className="text-primary" />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully.
                    I will get back to you as soon as possible.
                  </p>
                  
                  <Button
                    onClick={closeModal}
                    variant="glow"
                    size="lg"
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
