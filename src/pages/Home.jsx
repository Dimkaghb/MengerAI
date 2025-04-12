import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  BeakerIcon, 
  DevicePhoneMobileIcon,
  UserPlusIcon,
  AcademicCapIcon,
  TrophyIcon,
  ChartBarIcon,
  ArrowRightIcon,
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
  {
    icon: UserPlusIcon,
    title: 'Test',
    description: 'Take our smart assessment',
    color: 'bg-blue-500',
  },
  {
    icon: AcademicCapIcon,
    title: 'Plan',
    description: 'Get a personalized plan',
    color: 'bg-indigo-500',
  },
  {
    icon: TrophyIcon,
    title: 'Learn',
    description: 'Follow your learning path',
    color: 'bg-purple-500',
  },
  {
    icon: ChartBarIcon,
    title: 'Play',
    description: 'Compete and grow together',
    color: 'bg-pink-500',
  },
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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Learn Smarter with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Menger AI
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Your AI assistant for achieving academic excellence and continuous growth.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>
          
          {/* Photo Showcase with Floating Effect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl transform rotate-1 opacity-10"></div>
            <img 
              src={photoImage} 
              alt="Menger AI Interface" 
              className="relative w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section with Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mt-4 text-gray-800">{stat.label}</div>
                <div className="text-gray-600 mt-2">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Features Section with Modern Cards */}
      <div id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Menger AI</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the future of learning with our cutting-edge features
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* How It Works Section with Timeline */}
      <div id="how-it-works" className="py-24 bg-gray-50 overflow-hidden scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              How Menger AI Works
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our simple 4-step process to transform your learning experience
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-500 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-16 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 text-lg">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl font-bold text-indigo-600">
                    {index + 1}
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials with Modern Cards */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Our Students Love Us
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              See what our students have to say about their experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full ring-4 ring-indigo-50"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-900">Progress</span>
                    <span className="font-semibold text-indigo-600">{testimonial.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${testimonial.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section with Gradient Background */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute inset-0 bg-grid-white/10 bg-grid-16"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Ready to transform your learning experience?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
          >
            Join thousands of students who are already achieving their academic goals with Menger AI.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-indigo-600 bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started for Free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-medium text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home; 