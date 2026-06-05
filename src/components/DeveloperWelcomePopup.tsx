'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function DeveloperWelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('whispr-welcome-seen');
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('whispr-welcome-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 400 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 max-w-xs"
        >
          <div className="rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-2xl">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-8">
              <p className="text-2xl mb-2">👋 Welcome to Whispr!</p>
              <p className="text-sm text-gray-200 mb-4">
                Hi, I&apos;m <span className="font-semibold">Priyanshu Dixit</span>.
              </p>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                I built Whispr to help people receive honest and anonymous feedback in a simple, secure, and meaningful way.
              </p>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Whether you&apos;re a student, creator, team member, professional, or simply curious about how others perceive you, Whispr provides a safe space for authentic feedback.
              </p>
              <p className="text-sm text-gray-300 mb-6">
                Thank you for visiting, and I hope you enjoy using the platform.
              </p>
              <p className="text-xs text-gray-400 mb-4">— Priyanshu Dixit</p>

              <a
                href="https://linkedin.com/in/priyanshu-dixit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition"
              >
                Connect with Developer
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
