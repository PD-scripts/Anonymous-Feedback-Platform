'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  User,
  Link2,
  MessageSquare,
  Shield,
  Zap,
  Lock,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DeveloperWelcomePopup } from '@/components/DeveloperWelcomePopup';
import { PhoneMockup } from '@/components/PhoneMockup';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};


// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-amber-400 opacity-20 blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-15 blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 40, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Phone Mockup - Hidden on mobile, shown on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden md:block"
          >
            <PhoneMockup />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            >
              Receive Honest Anonymous Messages.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Create your profile, share your unique link, and receive honest, anonymous feedback from
              friends, classmates, teammates, followers, or colleagues.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 flex-wrap mb-8">
              <Link href="/sign-up">
                <Button className="px-8 py-3 bg-white text-black text-lg font-semibold hover:scale-105 transition">
                  Get Started
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" className="px-8 py-3 text-lg font-semibold">
                  Learn How It Works
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile: Phone Mockup - Shown on mobile only */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:hidden mt-12 max-w-xs mx-auto"
        >
          <PhoneMockup />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: 'Create Your Profile',
      description: 'Sign up with your email and choose a unique username.',
      icon: User,
    },
    {
      number: 2,
      title: 'Share Your Unique Link',
      description: 'Copy your profile link and share it on socials, DMs, or anywhere.',
      icon: Link2,
    },
    {
      number: 3,
      title: 'Receive Anonymous Messages',
      description: 'Receive honest, private feedback without knowing who sent it.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Three simple steps to start receiving feedback.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-black">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Live Demo Section
function LiveDemoSection() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  const messages = [
    'Your presentations are always amazing.',
    'You explain concepts really well.',
    'You should speak more confidently.',
  ];

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages, messages.length]);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-4xl font-bold text-center mb-12"
        >
          Live Demo
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={visibleMessages > idx ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 rounded-lg p-4 border border-indigo-500/20"
                >
                  <p className="text-sm text-gray-300 mb-1">Anonymous</p>
                  <p className="text-white font-medium">{msg}</p>
                </motion.div>
              ))}
            </div>

            {visibleMessages === 0 && (
              <p className="text-center text-gray-400 text-sm mt-4">Loading demo...</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Why Use Whispr Section
function WhyUseWhisprSection() {
  const features = [
    { title: '100% Anonymous', icon: Shield },
    { title: 'Honest Feedback', icon: MessageSquare },
    { title: 'Easy Sharing', icon: Link2 },
    { title: 'Secure Authentication', icon: Lock },
    { title: 'Privacy First', icon: Sparkles },
    { title: 'Modern Experience', icon: Zap },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Use Whispr?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 transition"
              >
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-cyan-400 w-fit rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">Designed for clarity and privacy.</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Real World Use Cases Section
function UseCasesSection() {
  const cases = [
    { title: 'Students', emoji: '🎓' },
    { title: 'Friends', emoji: '👥' },
    { title: 'Teams', emoji: '💼' },
    { title: 'Creators', emoji: '🎬' },
    { title: 'Event Feedback', emoji: '🎉' },
    { title: 'Personal Growth', emoji: '🌱' },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-4xl font-bold text-center mb-12"
        >
          Real World Use Cases
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 text-center hover:bg-white/10 transition"
            >
              <div className="text-4xl mb-4">{useCase.emoji}</div>
              <h3 className="text-xl font-bold">{useCase.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Showcase Section
function ProductShowcaseSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-4xl font-bold text-center mb-12"
        >
          Product Showcase
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-6">Your Profile</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Username</p>
                  <p className="font-bold">@your_username</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Your Unique Link</p>
                <p className="font-mono text-sm">whispr.io/u/your_username</p>
              </div>
            </div>
          </motion.div>

          {/* Messages Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-6">Anonymous Messages</h3>
            <div className="space-y-3">
              {[
                'Your presentations are amazing.',
                'Love the way you explain concepts.',
                'Keep up the great work!',
              ].map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-3 bg-gradient-to-r from-indigo-600/20 to-cyan-500/20 rounded-lg border border-indigo-500/20"
                >
                  <p className="text-sm text-gray-200">{msg}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Trust Section
function TrustSection() {
  const trustPoints = [
    {
      title: 'No sender identity revealed',
      description: 'We never disclose who sent a message unless you decide to.',
    },
    {
      title: 'Secure account system',
      description: 'Modern authentication and secure data handling.',
    },
    {
      title: 'User-controlled settings',
      description: 'Enable/disable messages and manage privacy from your dashboard.',
    },
    {
      title: 'Privacy-focused platform',
      description: 'We respect your privacy and only collect necessary data.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-4xl font-bold text-center mb-12"
        >
          Trust & Privacy
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustPoints.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-gray-300">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are messages really anonymous?',
      a: 'Yes. Senders are completely anonymous unless they choose to reveal themselves in their message.',
    },
    {
      q: 'How does Whispr work?',
      a: 'Create a profile, share your unique link, and receive anonymous feedback from anyone who visits it.',
    },
    {
      q: 'Can I disable messages?',
      a: 'Absolutely. You can toggle receiving messages anytime from your dashboard settings.',
    },
    {
      q: 'Is my information safe?',
      a: 'Yes. We use secure authentication, encrypted connections, and follow privacy best practices.',
    },
    {
      q: 'Do I need an account?',
      a: 'Yes, you need an account to create your profile and view messages. But senders don\'t need one.',
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition"
              >
                <h3 className="font-bold text-lg">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openIndex === idx ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-gray-300 border-t border-white/10 pt-4">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-bold mb-4">
            Start Receiving Honest Feedback Today
          </motion.h2>

          <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-lg text-white/90 mb-8">
            Discover what people genuinely think — anonymously.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/sign-up">
              <Button className="px-8 py-3 bg-white text-purple-600 text-lg font-semibold hover:scale-105 transition">
                Create Account
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button variant="outline" className="px-8 py-3 text-white text-lg font-semibold border-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-black text-center py-8 text-gray-400 border-t border-white/10">
      <div className="container mx-auto px-6">
        <p>© {new Date().getFullYear()} Whispr — Anonymous Feedback Platform</p>
        <p className="text-sm mt-2">Built with ❤️ by Priyanshu Dixit</p>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <HowItWorksSection />
      <LiveDemoSection />
      <WhyUseWhisprSection />
      <UseCasesSection />
      <ProductShowcaseSection />
      <TrustSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <DeveloperWelcomePopup />
    </div>
  );
}
