import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  BeakerIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';
import photoImage from '../assets/photo1.png';

const features = [
  {
    title: 'AI Personalization',
    description: 'Adaptive learning paths tailored to your unique style and pace',
    icon: LightBulbIcon,
  },
  {
    title: 'Learning Gamification',
    description: 'Making learning fun with points, badges, and friendly competitions',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Proven Methods',
    description: 'Based on Feynman, Pomodoro, and other effective learning techniques',
    icon: BeakerIcon,
  },
  {
    title: 'All Device Support',
    description: 'Learn anywhere and anytime on all your devices',
    icon: DevicePhoneMobileIcon,
  },
];

const stats = [
  {
    value: '100+',
    label: 'Active Students',
    description: 'Learning and growing with us'
  },
  {
    value: '95%',
    label: 'Success Rate',
    description: 'Students achieve their goals'
  },
  {
    value: '24/7',
    label: 'Support',
    description: 'AI assistant always available'
  }
];

const steps = [
  { number: '01', title: 'Test', description: 'Take our smart assessment' },
  { number: '02', title: 'Plan', description: 'Get a personalized plan' },
  { number: '03', title: 'Learn', description: 'Follow your learning path' },
  { number: '04', title: 'Play', description: 'Compete and grow together' },
];

const testimonials = [
  {
    name: 'Kalamkas Aruzhan',
    role: 'NIS Taraz Student',
    image: 'https://i.pravatar.cc/150?img=5',
    progress: 85,
    quote: 'Menger helped me improve my math grades by 40% in just two months!',
  },
  {
    name: 'Kadyrbek Nurali',
    role: 'SLOD Student',
    image: 'https://i.pravatar.cc/150?img=3',
    progress: 92,
    quote: 'The AI learning system is like having a personal tutor available 24/7.',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8"
          >
            Learn Smarter with <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Menger AI</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your AI assistant for achieving academic excellence and continuous growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              to="/signup"
              className="btn-primary text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium"
            >
              Start Now
            </Link>
          </motion.div>
        </div>
        
        {/* Photo Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <img src={photoImage} alt="Menger AI Interface" className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl" />
        </motion.div>
      </div>
      
      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-lg md:text-xl font-semibold mt-2">{stat.label}</div>
                <div className="text-gray-600 mt-1">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Choose <span className="text-primary">Menger AI</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How It Works */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">How Menger AI Works</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Our simple 4-step process to transform your learning experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center text-primary font-bold text-2xl mx-auto">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold">Our Students Love Us</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              See what our students have to say about their experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{testimonial.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${testimonial.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to transform your learning experience?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
          >
            Join thousands of students who are already achieving their academic goals with Menger AI.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              to="/signup"
              className="btn-white text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-indigo-600 font-medium"
            >
              Get Started for Free
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 