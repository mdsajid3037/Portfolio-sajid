
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Mail, Linkedin, ExternalLink, Download, Moon, Sun, Menu, X, Phone, MapPin, Code, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedAvatar from '@/components/AnimatedAvatar';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'HTML/CSS',
    'Tailwind CSS', 'Git', 'C++', 'Machine Learning Fundamentals', 'SQL'
  ];

  const projects = [
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with user authentication and rich text editor',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tags: ['React', 'Node.js', 'SQL', 'Tailwind', 'Tinymce']
    },
    {
      title: 'Body mass Index Calculator',
      description: 'A simple BMI calculator with a clean interface',
      image: 'https://images.unsplash.com/photo-1600585154322-8f0b1c5d3c4e?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tags: ['JavaScript', 'HTML', 'CSS']
    },
    
    {
      title: 'Currency Converter',
      description: 'A real-time currency converter with live exchange rates',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b8c0d3c1e?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      tags: ['React','tailwind','JavaScript', 'API', 'CSS']
    
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
  };

  const handleResumeDownload = () => {
    toast({
      title: "Resume Downloaded",
      description: "Resume download started successfully!",
    });
  };

  return (
    <div className="min-h-screen text-foreground transition-colors duration-300 relative">
      <AnimatedBackground />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Mohammad Sajid
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-white/80 hover:text-white transition-colors relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-white/80 hover:text-white transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 text-white/80 hover:text-white border border-white/20 hover:border-white/40"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="mr-2 text-white/80 hover:text-white"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white/80 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in bg-black/40 backdrop-blur-sm rounded-lg p-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left p-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <AnimatedAvatar />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Mohammad Sajid
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/70">
            Passionate about creating innovative web solutions that make a difference. 
            I love turning complex problems into simple, beautiful designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="hover-scale border-white/30 text-white hover:bg-white/10"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4 text-white">Hello! I'm Mohammad Sajid</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience creating 
                digital experiences that are both functional and beautiful. I enjoy working 
                on challenging projects that push the boundaries of what's possible on the web.
              </p>
              <p className="text-white/70 mb-6 leading-relaxed">
                My goal is to build applications that not only meet user needs but exceed 
                expectations through thoughtful design and seamless functionality.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="hover-scale border-white/30 text-white hover:bg-white/10">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="hover-scale border-white/30 text-white hover:bg-white/10">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop"
                alt="Working"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
            {skills.map((skill, index) => (
              <div key={skill} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Badge 
                  variant="secondary" 
                  className="w-full justify-center py-3 text-center bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors duration-200 cursor-default backdrop-blur-sm"
                >
                  {skill}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white/10 backdrop-blur-sm border-white/20" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-white/30 text-white/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Resume</h2>
          <p className="text-white/70 mb-8">
            Download my resume to learn more about my experience, education, and accomplishments.
          </p>
          <Button size="lg" onClick={handleResumeDownload} className="hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Download className="w-4 h-4 mr-2" />
            Download Resume (PDF)
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-white/80">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span>mdsajid3037@gmail.com</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span>+91 9693281261</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button variant="outline" size="sm" className="hover-scale border-white/30 text-white hover:bg-white/10">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className="hover-scale border-white/30 text-white hover:bg-white/10">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-6 animate-fade-in">
              <div>
                <Input placeholder="Your Name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div>
                <Input placeholder="Subject" required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <Button type="submit" className="w-full hover-scale bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 bg-black/40 backdrop-blur-lg border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <Code className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Mohammad Sajid</h3>
              </div>
              <p className="text-white/60">Full Stack Developer passionate about creating amazing web experiences.</p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-white/60 hover:text-white transition-colors">About</button>
                <button onClick={() => scrollToSection('skills')} className="block text-white/60 hover:text-white transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="block text-white/60 hover:text-white transition-colors">Projects</button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-white/60">
              © 2024 Mohammad Sajid. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
