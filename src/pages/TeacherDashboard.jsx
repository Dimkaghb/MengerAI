import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  ChartBarIcon,
  CalendarIcon,
  AcademicCapIcon,
  PlusIcon,
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
            <p className="mt-2 text-gray-600">Manage your classes and track student progress</p>
          </div>
          <button
            onClick={() => setShowNewClassModal(true)}
            className="btn-primary flex items-center"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            New Class
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex space-x-4 mb-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockClasses.map((classItem, index) => (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {classItem.name}
                    </h3>
                    <span className="text-sm text-gray-500">
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
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      <span>Next Session: {formatDate(classItem.nextSession)}</span>
                    </div>
                    <button className="btn-primary text-sm w-full">
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
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {student.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.class}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Progress</div>
                      <div className="font-semibold text-gray-900">{student.progress}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Attendance</div>
                      <div className="font-semibold text-gray-900">{student.attendance}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Last Active</div>
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
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Class Performance
                </h3>
                <div className="space-y-4">
                  {mockClasses.map((classItem) => (
                    <div key={classItem.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{classItem.name}</span>
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
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Student Engagement
                </h3>
                <div className="space-y-4">
                  {mockStudents.map((student) => (
                    <div key={student.id}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{student.name}</span>
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