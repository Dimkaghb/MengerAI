import React, { useState } from 'react';
import {
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon,
  CalendarIcon,
  UsersIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

// Mock teacher team data
const mockTeacherTeam = {
  name: "Ms. Johnson's Class",
  courses: [
    {
      id: 1,
      name: 'Advanced Mathematics',
      description: 'Complex mathematical concepts and problem solving',
      progress: 75,
      nextCompetition: 'Algebra Challenge - Tomorrow 2:00 PM',
      icon: '📐'
    },
    {
      id: 2,
      name: 'Physics Fundamentals',
      description: 'Basic physics principles and applications',
      progress: 60,
      nextCompetition: 'Physics Quiz - Friday 3:30 PM',
      icon: '⚡'
    },
    {
      id: 3,
      name: 'Computer Science',
      description: 'Programming concepts and algorithms',
      progress: 90,
      nextCompetition: 'Coding Competition - Next Monday 1:00 PM',
      icon: '💻'
    }
  ],
  upcomingCompetitions: [
    {
      id: 1,
      name: 'Algebra Challenge',
      date: 'Tomorrow 2:00 PM',
      participants: 15,
      difficulty: 'Intermediate',
      subject: 'Mathematics',
      icon: '📐'
    },
    {
      id: 2,
      name: 'Physics Quiz',
      date: 'Friday 3:30 PM',
      participants: 12,
      difficulty: 'Beginner',
      subject: 'Physics',
      icon: '⚡'
    },
    {
      id: 3,
      name: 'Coding Competition',
      date: 'Next Monday 1:00 PM',
      participants: 20,
      difficulty: 'Advanced',
      subject: 'Computer Science',
      icon: '💻'
    }
  ]
};

const JoinTeam = () => {
  const [teamCode, setTeamCode] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [activeTab, setActiveTab] = useState('courses');

  const handleJoin = (e) => {
    e.preventDefault();
    setIsJoined(true);
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="text-center">
            <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
              <UserGroupIcon className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Join Team</h1>
            <p className="text-lg text-gray-600 mb-8">
              Enter your team code to access your learning space
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleJoin}>
              <div className="mb-6">
                <label htmlFor="teamCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Team Code
                </label>
                <input
                  id="teamCode"
                  type="text"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  placeholder="Enter your team code"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Top Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <AcademicCapIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h1 className="text-xl font-semibold text-gray-900">{mockTeacherTeam.name}</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <nav className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Dashboard
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Students
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                      Settings
                    </a>
                  </nav>
                  <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden">
                    <span className="sr-only">Open menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'courses'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <ChartBarIcon className="h-5 w-5 mr-2" />
                  Courses
                </button>
                <button
                  onClick={() => setActiveTab('competitions')}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === 'competitions'
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <TrophyIcon className="h-5 w-5 mr-2" />
                  Competitions
                </button>
              </div>
              <div className="hidden md:flex items-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  Invite Students
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'courses' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTeacherTeam.courses.map((course) => (
              <div key={course.id} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="p-6">
                  <div className="flex items-start">
                    <span className="text-4xl mr-4">{course.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Course Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary rounded-full h-full transition-all duration-500 ease-out"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-primary">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {course.nextCompetition}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTeacherTeam.upcomingCompetitions.map((competition) => (
              <div key={competition.id} className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-4xl mr-4">{competition.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {competition.name}
                      </h3>
                      <p className="text-sm text-gray-500">{competition.subject}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      {competition.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <UsersIcon className="h-4 w-4 mr-2" />
                      {competition.participants} Participants
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        competition.difficulty === 'Beginner'
                          ? 'bg-green-100 text-green-800'
                          : competition.difficulty === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {competition.difficulty}
                      </span>
                    </div>
                    <button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-lg transition-colors">
                      Join Competition
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinTeam; 