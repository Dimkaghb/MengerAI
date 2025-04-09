import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  UserGroupIcon,
  TrophyIcon,
  UserIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

// Mock data for courses
const mockCourses = [
  {
    id: 1,
    title: 'Algebra Basics',
    video: 'https://www.youtube.com/embed/5E3rT4zKP4E',
    tags: ['Math', 'Beginner'],
    xp: 100,
  },
  {
    id: 2,
    title: 'Physics Fundamentals',
    video: 'https://www.youtube.com/embed/7R0mJ1Hhx0c',
    tags: ['Physics', 'Intermediate'],
    xp: 150,
  },
  {
    id: 3,
    title: 'Chemistry 101',
    video: 'https://www.youtube.com/embed/LQ1TZe0nXyU',
    tags: ['Chemistry', 'Beginner'],
    xp: 120,
  },
];

const tags = ['All', 'Math', 'Physics', 'Chemistry', 'Biology', 'History'];

const Dashboard = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = mockCourses.filter(course => {
    const matchesTag = selectedTag === 'All' || course.tags.includes(selectedTag);
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg">
          <div className="p-6">
            <Link to="/" className="text-2xl font-sora font-bold text-lavender">
              Menger
            </Link>
          </div>
          <nav className="mt-6">
            <div className="px-4 space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 text-gray-700 bg-lavender bg-opacity-10 rounded-lg"
              >
                <BookOpenIcon className="h-5 w-5 mr-3" />
                My Courses
              </Link>
              <Link
                to="/join-team"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <UserGroupIcon className="h-5 w-5 mr-3" />
                Join Team
              </Link>
              <Link
                to="/compete"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <TrophyIcon className="h-5 w-5 mr-3" />
                Competitions
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <UserIcon className="h-5 w-5 mr-3" />
                Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <Cog6ToothIcon className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
            <p className="text-gray-600 mt-2">Continue your learning journey</p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Level 1</span>
              <span className="text-sm font-medium text-gray-700">250/1000 XP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-lavender h-2 rounded-full"
                style={{ width: '25%' }}
              ></div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
              >
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <iframe
                    src={course.video}
                    title={course.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-lavender bg-opacity-10 text-lavender rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {course.xp} XP
                  </span>
                  <Link
                    to={`/course/${course.id}`}
                    className="btn-primary text-sm"
                  >
                    Start Learning
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 