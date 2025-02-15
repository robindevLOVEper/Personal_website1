import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Mail,
  GraduationCap
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const navItems = [
    { label: 'About Me', id: 'about' },
    { label: 'Education', id: 'education' },
    { label: 'Work', id: 'work' },
    { label: 'Resources', id: 'resources' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
    { label: 'Resume', id: 'resume' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.a 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold cursor-pointer"
            >
              John Smith
            </motion.a>
            <div className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Full Stack Developer & Researcher
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Passionate about building innovative solutions and exploring new technologies
              </p>
              <div className="flex gap-4 justify-center">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  Contact Me
                </button>
                <button onClick={() => scrollToSection('work')} className="btn-secondary">
                  View Projects
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding max-w-6xl mx-auto py-20 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm a full stack developer with 5+ years of experience building
                web applications. My research focuses on machine learning and
                artificial intelligence. I'm passionate about creating efficient,
                scalable solutions and contributing to open source projects.
              </p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-padding max-w-6xl mx-auto py-20 px-6">
          <h2 className="section-title">Education</h2>
          <div className="space-y-8">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold">Ph.D. in Computer Science</h3>
                  <p className="text-gray-600">Stanford University • 2018-2022</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold">M.S. in Computer Science</h3>
                  <p className="text-gray-600">MIT • 2016-2018</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="section-padding max-w-6xl mx-auto py-20 px-6">
          <h2 className="section-title">Research Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Cyber Security"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Cyber Security Free Resources</h3>
              <p className="text-gray-600 mb-4">
                A curated collection of free resources, tools, and tutorials for
                learning cybersecurity, including labs, challenges, and certification
                guides.
              </p>
              <Link to="/cyber-security-resources" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
                Read More <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Development Roadmap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Development Roadmap</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive step-by-step guides for learning various
                technology stacks, including frontend, backend, DevOps, and cloud
                computing.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">
                Read More <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="section-padding max-w-6xl mx-auto py-20 px-6">
          <h2 className="section-title">Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Cybersecurity Resources</h3>
              <ul className="space-y-2">
                <li>• TryHackMe Learning Path</li>
                <li>• HackTheBox Tutorials</li>
                <li>• OWASP Top 10 Guide</li>
                <li>• Cybersecurity Tools List</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">Development Roadmaps</h3>
              <ul className="space-y-2">
                <li>• Frontend Development Path</li>
                <li>• Backend Development Guide</li>
                <li>• DevOps Learning Track</li>
                <li>• Cloud Architecture Path</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">YouTube Channels</h3>
              <ul className="space-y-2">
                <li>• FreeCodeCamp</li>
                <li>• Traversy Media</li>
                <li>• FireShip</li>
                <li>• TechWorld with Nana</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section-padding max-w-6xl mx-auto py-20 px-6">
          <h2 className="section-title">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
                alt="AWS Certification"
                className="w-16 h-16 mb-4 rounded"
              />
              <h3 className="text-xl font-bold">AWS Solutions Architect</h3>
              <p className="text-gray-600">Amazon Web Services</p>
              <p className="text-sm text-gray-500 mt-2">Credential ID: AWS-123456</p>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Google Cloud Certification"
                className="w-16 h-16 mb-4 rounded"
              />
              <h3 className="text-xl font-bold">Google Cloud Professional</h3>
              <p className="text-gray-600">Google Cloud Platform</p>
              <p className="text-sm text-gray-500 mt-2">Credential ID: GCP-789012</p>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Azure Certification"
                className="w-16 h-16 mb-4 rounded"
              />
              <h3 className="text-xl font-bold">Azure Solutions Expert</h3>
              <p className="text-gray-600">Microsoft Azure</p>
              <p className="text-sm text-gray-500 mt-2">Credential ID: AZ-345678</p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding max-w-6xl mx-auto py-20 px-6">
          <h2 className="section-title">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="section-padding max-w-6xl mx-auto py-20 px-6 text-center">
          <h2 className="section-title">My Resume</h2>
          <button className="btn-primary inline-flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Resume (PDF, 2.1MB)
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2024 John Smith. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;