'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Bell } from 'lucide-react';

interface Message {
  id: number;
  text: string;
}

const messages: Message[] = [
  { id: 1, text: 'Your presentations are amazing.' },
  { id: 2, text: 'You explain concepts really well.' },
  { id: 3, text: 'You should start creating content.' },
  { id: 4, text: 'Your confidence inspires people.' },
  { id: 5, text: 'Keep up the great work.' },
];

export function PhoneMockup() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      setIsTyping(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-sm mx-auto"
    >
      {/* Floating animation container */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-blue-500/30 rounded-3xl blur-2xl -z-10" />

        {/* Phone frame */}
        <div className="relative bg-black rounded-3xl p-3 shadow-2xl border border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 border-x border-b border-gray-800" />

          {/* Screen */}
          <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden shadow-inner">
            {/* Status bar */}
            <div className="bg-black px-6 py-2 flex justify-between items-center text-xs text-white">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-white rounded-sm" />
                <div className="w-1 h-2 bg-white rounded-sm" />
              </div>
            </div>

            {/* Phone Header */}
            <div className="px-6 py-4 border-b border-white/10 bg-gray-900/50">
              <div className="flex items-center gap-3 mb-4">
                {/* Profile Avatar */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <span className="text-lg">👤</span>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-sm">@priyanshu</h3>
                  <p className="text-gray-400 text-xs">Receiving Anonymous Messages</p>
                </div>
                {/* Notification badge */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="relative"
                >
                  <Bell className="w-5 h-5 text-cyan-400" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Messages Container */}
            <div className="px-4 py-6 space-y-4 min-h-96 bg-gradient-to-b from-gray-900/30 to-black/50">
              <AnimatePresence mode="wait">
                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-start gap-2 mb-4"
                  >
                    {/* Blurred Avatar */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0 blur-sm opacity-60">
                      <span className="text-xs">?</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-gray-500"
                      />
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }}
                        className="w-2 h-2 rounded-full bg-gray-500"
                      />
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 rounded-full bg-gray-500"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Message content */}
                <motion.div
                  key={messages[currentMessageIndex].id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-2"
                >
                  {/* Blurred Anonymous Avatar */}
                  <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0 blur-sm"
                  >
                    <span className="text-xs text-gray-400">?</span>
                  </motion.div>

                  {/* Message bubble */}
                  <div className="flex-1">
                    <p className="text-xs text-gray-400 mb-1">Anonymous User</p>
                    <div className="bg-gradient-to-r from-indigo-600/40 to-cyan-500/30 border border-indigo-500/40 rounded-2xl px-4 py-3">
                      <p className="text-sm text-white leading-snug">
                        &quot;{messages[currentMessageIndex].text}&quot;
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating message bubble decoration */}
              <motion.div
                animate={{ y: [0, -100], opacity: [1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl opacity-20 pointer-events-none"
              >
                💬
              </motion.div>

              <motion.div
                animate={{ y: [0, -100], opacity: [1, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                className="absolute left-2 top-1/3 text-2xl opacity-20 pointer-events-none"
              >
                ✨
              </motion.div>
            </div>

            {/* Action buttons */}
            <div className="px-4 py-4 flex gap-2 bg-gradient-to-t from-black/80 to-transparent border-t border-white/10">
              <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-2 text-xs font-medium text-white transition">
                👍
              </button>
              <button className="flex-1 bg-gradient-to-r from-indigo-600/40 to-cyan-500/30 hover:from-indigo-600/50 hover:to-cyan-500/40 border border-indigo-500/40 rounded-lg py-2 text-xs font-medium text-white transition">
                Reply
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
