import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  Mail,
  GraduationCap
} from 'lucide-react';
import HomePage from './pages/HomePage';
import CyberSecurityResources from './pages/CyberSecurityResources';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cyber-security-resources" element={<CyberSecurityResources />} />
      </Routes>
    </div>
  );
}

export default App;