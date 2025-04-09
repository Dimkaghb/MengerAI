import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  RocketLaunchIcon, 
  BeakerIcon, 
  DevicePhoneMobileIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'AI Personalization',
    description: 'Adaptive learning paths tailored to your unique style and pace',
    icon: LightBulbIcon,
  },
  {
    title: 'Gamified Learning',
    description: 'Make learning fun with points, badges, and friendly competition',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Proven Techniques',
    description: 'Built on Feynman, Pomodoro, and other effective learning methods',
    icon: BeakerIcon,
  },
  {
    title: 'Multi-device Support',
    description: 'Learn anywhere, anytime across all your devices',
    icon: DevicePhoneMobileIcon,
  },
];

const stats = [
  {
    value: '10k+',
    label: 'Active Students',
    description: 'Learning and growing with us'
  },
  {
    value: '95%',
    label: 'Success Rate',
    description: 'Students achieving their goals'
  },
  {
    value: '24/7',
    label: 'Support',
    description: 'AI assistance always available'
  }
];

const steps = [
  { number: '01', title: 'Quiz', description: 'Take our smart assessment' },
  { number: '02', title: 'Plan', description: 'Get your personalized plan' },
  { number: '03', title: 'Learn', description: 'Follow your learning path' },
  { number: '04', title: 'Play', description: 'Compete and grow together' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'High School Student',
    image: 'https://i.pravatar.cc/150?img=1',
    progress: 85,
    quote: 'Menger helped me improve my math scores by 40% in just two months!',
  },
  {
    name: 'Michael Rodriguez',
    role: 'College Student',
    image: 'https://i.pravatar.cc/150?img=2',
    progress: 92,
    quote: 'The AI-powered learning path is like having a personal tutor 24/7.',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Learn Smarter with <span className="text-primary">Grow Faster</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Your AI-powered learning companion for academic excellence.
          </p>
          <div className="mt-8">
            <Link
              to="/signup"
              className="btn-primary text-lg px-8 py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Video Preview */}
        <div className="mt-12">
          <div className="aspect-w-16 aspect-h-9 bg-primary bg-opacity-10 rounded-2xl">
            {/* Video placeholder */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="h-12 w-12 text-primary mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {stat.value}
                  </span>
                </div>
                <p className="mt-4 text-lg font-medium text-gray-900">{stat.label}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${testimonial.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 