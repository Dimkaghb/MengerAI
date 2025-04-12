import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  ChartBarIcon,
  CalendarIcon,
  AcademicCapIcon,
  PlusIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

// Mock data
const mockClasses = [
  {
    id: 1,
    name: 'Algebra 101',
    students: 25,
    progress: 75,
    nextSession: '2024-03-20T10:00:00',
  },
  {
    id: 2,
    name: 'Physics Fundamentals',
    students: 18,
    progress: 60,
    nextSession: '2024-03-21T14:00:00',
  },
  {
    id: 3,
    name: 'Chemistry Basics',
    students: 22,
    progress: 45,
    nextSession: '2024-03-22T11:00:00',
  },
];

const mockStudents = [
  {
    id: 1,
    name: 'Sarah Chen',
    class: 'Algebra 101',
    progress: 85,
    attendance: 90,
    lastActive: '2024-03-19',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    class: 'Physics Fundamentals',
    progress: 72,
    attendance: 85,
    lastActive: '2024-03-19',
  },
  {
    id: 3,
    name: 'Emma Wilson',
    class: 'Chemistry Basics',
    progress: 68,
    attendance: 95,
    lastActive: '2024-03-18',
  },
];

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('classes');
  const [showNewClassModal, setShowNewClassModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background py-4 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-900">Teacher Dashboard</h1>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-sm rounded-lg p-4 mb-6 fixed inset-0 z-50 bg-opacity-95">
            <div className="flex justify-end mb-4">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setActiveTab('classes');
                  toggleMobileMenu();
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activeTab === 'classes'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <UserGroupIcon className="h-5 w-5 mr-3" />
                Classes
              </button>
              <button
                onClick={() => {
                  setActiveTab('students');
                  toggleMobileMenu();
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activeTab === 'students'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <AcademicCapIcon className="h-5 w-5 mr-3" />
                Students
              </button>
              <button
                onClick={() => {
                  setActiveTab('analytics');
                  toggleMobileMenu();
                }}
                className={`flex items-center px-4 py-3 rounded-lg ${
                  activeTab === 'analytics'
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <ChartBarIcon className="h-5 w-5 mr-3" />
                Analytics
              </button>
              <button
                onClick={() => {
                  setShowNewClassModal(true);
                  toggleMobileMenu();
                }}
                className="flex items-center justify-center mt-4 px-4 py-3 bg-primary text-white rounded-lg"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                New Class
              </button>
            </div>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage your classes and track student progress</p>
          </div>
          <button
            onClick={() => setShowNewClassModal(true)}
            className="btn-primary flex items-center px-4 py-2 bg-primary text-white rounded-lg"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            New Class
          </button>
        </div>

        {/* Mobile Action Button - Fixed at bottom */}
        <div className="md:hidden fixed bottom-6 right-6 z-10">
          <button
            onClick={() => setShowNewClassModal(true)}
            className="btn-primary flex items-center justify-center p-4 bg-primary text-white rounded-full shadow-lg"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          {/* Mobile Tab Title */}
          <div className="md:hidden mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {activeTab === 'classes' ? 'Classes' : 
               activeTab === 'students' ? 'Students' : 'Analytics'}
            </h2>
          </div>
          
          {/* Desktop Tabs */}
          <div className="hidden md:flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('classes')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'classes'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Classes
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'students'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              Students
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'analytics'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Analytics
            </button>
          </div>

          {activeTab === 'classes' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {mockClasses.map((classItem, index) => (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900">
                      {classItem.name}
                    </h3>
                    <span className="text-xs md:text-sm text-gray-500">
                      {classItem.students} students
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Class Progress</span>
                        <span className="text-gray-900">{classItem.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${classItem.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-gray-600">
                      <CalendarIcon className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                      <span className="truncate">Next: {formatDate(classItem.nextSession)}</span>
                    </div>
                    <button className="btn-primary text-xs md:text-sm w-full py-2 bg-primary text-white rounded-lg">
                      View Class Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-4">
              {mockStudents.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center mb-3 md:mb-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {student.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{student.name}</h3>
                      <p className="text-xs md:text-sm text-gray-600">{student.class}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap md:space-x-6 mt-2 md:mt-0">
                    <div className="mr-4 md:mr-0 mb-2 md:mb-0">
                      <div className="text-xs text-gray-600">Progress</div>
                      <div className="font-semibold text-gray-900">{student.progress}%</div>
                    </div>
                    <div className="mr-4 md:mr-0 mb-2 md:mb-0">
                      <div className="text-xs text-gray-600">Attendance</div>
                      <div className="font-semibold text-gray-900">{student.attendance}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">Last Active</div>
                      <div className="font-semibold text-gray-900">
                        {new Date(student.lastActive).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                  Class Performance
                </h3>
                <div className="space-y-4">
                  {mockClasses.map((classItem) => (
                    <div key={classItem.id}>
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className="text-gray-600 truncate pr-2">{classItem.name}</span>
                        <span className="text-gray-900">{classItem.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${classItem.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                  Student Engagement
                </h3>
                <div className="space-y-4">
                  {mockStudents.map((student) => (
                    <div key={student.id}>
                      <div className="flex justify-between text-xs md:text-sm mb-1">
                        <span className="text-gray-600 truncate pr-2">{student.name}</span>
                        <span className="text-gray-900">{student.attendance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${student.attendance}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard; 