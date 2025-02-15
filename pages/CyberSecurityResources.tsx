import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Terminal, Book, Award, PenTool as Tool } from 'lucide-react';

function CyberSecurityResources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Your Crackerd
            </h1>
            <p className="text-xl text-purple-200">
              A comprehensive collection of cybersecurity resources, tools, and learning materials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Learning Paths */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-purple-900/50 rounded-lg p-8 backdrop-blur-sm border border-purple-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">Learning Paths</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Beginner's Guide to Ethical Hacking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Web Application Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Network Security Fundamentals</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Malware Analysis Basics</span>
                </li>
              </ul>
            </motion.div>

            {/* Practice Labs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-purple-900/50 rounded-lg p-8 backdrop-blur-sm border border-purple-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Terminal className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">Practice Labs</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>TryHackMe Rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>HackTheBox Challenges</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>VulnHub Virtual Machines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>OWASP WebGoat</span>
                </li>
              </ul>
            </motion.div>

            {/* Study Materials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-purple-900/50 rounded-lg p-8 backdrop-blur-sm border border-purple-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Book className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">Study Materials</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>OWASP Top 10 Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Penetration Testing Books</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Security Blogs and Articles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Video Tutorials</span>
                </li>
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-purple-900/50 rounded-lg p-8 backdrop-blur-sm border border-purple-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <Tool className="w-8 h-8 text-purple-400" />
                <h2 className="text-2xl font-bold">Essential Tools</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Kali Linux Tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Burp Suite Guide</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Wireshark Tutorials</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Metasploit Framework</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-purple-200 mb-8">
              Begin your cybersecurity learning path today with our carefully curated resources
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default CyberSecurityResources;