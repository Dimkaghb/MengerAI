import React from 'react';
import {
  AcademicCapIcon,
  ChartBarIcon,
  TrophyIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: AcademicCapIcon,
      title: 'Smart Learning',
      description: 'Adaptive learning paths that adjust to each student's progress and understanding level.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: ChartBarIcon,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics and insights to track student performance and identify areas for improvement.',
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      icon: TrophyIcon,
      title: 'Competitive Learning',
      description: 'Engaging competitions and challenges that make learning fun and motivating.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborative Environment',
      description: 'Interactive tools for group learning and peer-to-peer knowledge sharing.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: ClockIcon,
      title: 'Flexible Scheduling',
      description: 'Set your own pace with customizable learning schedules and deadlines.',
      color: 'bg-pink-100 text-pink-600',
    },
    {
      icon: SparklesIcon,
      title: 'Gamified Experience',
      description: 'Achievement badges, points, and rewards that make learning engaging and fun.',
      color: 'bg-yellow-100 text-yellow-600',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Powerful Features for Modern Learning
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover how Menger transforms education through technology and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <span className={`inline-flex p-3 rounded-lg ${feature.color} ring-4 ring-white`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-700 mt-16">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your learning experience?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of students and teachers who are already using Menger to enhance their educational journey.
          </p>
          <a
            href="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get started today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features; 