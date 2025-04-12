import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrophyIcon,
  UserGroupIcon,
  BookOpenIcon,
  UserIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
  ChartBarIcon,
  AcademicCapIcon,
  XMarkIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import mengerLogo from '../assets/menger3.png';

const TeacherDashboard = () => {
  const [classes, setClasses] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [isCreatingClass, setIsCreatingClass] = useState(false);
  const [isCreatingCompetition, setIsCreatingCompetition] = useState(false);
  const [activeTab, setActiveTab] = useState('classes');
  const [newClass, setNewClass] = useState({
    name: '',
    subject: '',
    description: '',
    competitions: [],
    students: [],
  });
  const [newCompetition, setNewCompetition] = useState({
    name: '',
    subject: '',
    description: '',
    timeLimit: 30,
    difficulty: 'medium',
    questions: [],
    status: 'draft',
  });

  const subjects = [
    { id: 'cs', name: 'Computer Science' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'math', name: 'Mathematics' },
    { id: 'biology', name: 'Biology' },
  ];

  const difficulties = [
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Hard' },
  ];

  // Mock data for class performance
  const classPerformance = [
    { name: 'Algebra 101', performance: 75 },
    { name: 'Physics Fundamentals', performance: 60 },
    { name: 'Chemistry Basics', performance: 45 },
  ];

  // Mock data for student engagement
  const studentEngagement = [
    { name: 'Sarah Chen', engagement: 90 },
    { name: 'Michael Rodriguez', engagement: 85 },
    { name: 'Emma Wilson', engagement: 95 },
  ];

  const handleCreateClass = (e) => {
    e.preventDefault();
    const newClassData = {
      ...newClass,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      studentCount: 0,
      status: 'Active',
    };
    setClasses([newClassData, ...classes]);
    setIsCreatingClass(false);
    setNewClass({
      name: '',
      subject: '',
      description: '',
      competitions: [],
      students: [],
    });
  };

  const handleCreateCompetition = (e) => {
    e.preventDefault();
    const newCompetitionData = {
      ...newCompetition,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      participantCount: 0,
    };
    setCompetitions([newCompetitionData, ...competitions]);
    setIsCreatingCompetition(false);
    setNewCompetition({
      name: '',
      subject: '',
      description: '',
      timeLimit: 30,
      difficulty: 'medium',
      questions: [],
      status: 'draft',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white fixed left-0 top-16 bottom-0 border-r border-gray-200 overflow-y-auto">
          <div className="flex flex-col h-full">
            {/* Profile Section */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Teacher Name</h2>
                  <p className="text-sm text-gray-600">Mathematics</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2">
              <Link to="/teacher/courses" className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
                <BookOpenIcon className="h-5 w-5 mr-3" />
                My Courses
              </Link>
              <Link to="/teacher/competitions" className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
                <TrophyIcon className="h-5 w-5 mr-3" />
                Competitions
              </Link>
              <Link to="/teacher/profile" className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
                <UserIcon className="h-5 w-5 mr-3" />
                Profile
              </Link>
              <Link to="/teacher/settings" className="flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors duration-200">
                <Cog6ToothIcon className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
            <div className="px-8 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Teacher Dashboard</h1>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsCreatingClass(true)}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  New Class
                </button>
                <button 
                  onClick={() => setIsCreatingCompetition(true)}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                >
                  <TrophyIcon className="h-5 w-5 mr-2" />
                  Create Competition
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="px-8 flex space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('classes')}
                className={`py-4 px-2 inline-flex items-center space-x-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'classes'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <AcademicCapIcon className="h-5 w-5" />
                <span>Classes</span>
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`py-4 px-2 inline-flex items-center space-x-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'students'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <UserGroupIcon className="h-5 w-5" />
                <span>Students</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-4 px-2 inline-flex items-center space-x-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'analytics'
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <ChartBarIcon className="h-5 w-5" />
                <span>Analytics</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8">
            {activeTab === 'classes' && (
              <div className="space-y-6">
                {/* Empty State */}
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                    <AcademicCapIcon className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No classes created yet</h3>
                  <p className="text-gray-500 mb-6">Click the "New Class" button to get started.</p>
                  <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Create Your First Class
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div className="space-y-6">
                {/* Student List will go here */}
                <div className="text-center py-12 text-gray-500">
                  Create a class first to add students
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                {/* Analytics content will go here */}
                <div className="text-center py-12 text-gray-500">
                  Analytics will be available once you have active classes
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard; 