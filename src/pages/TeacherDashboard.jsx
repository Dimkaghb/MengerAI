import React, { useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import {
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  PlusIcon,
  XMarkIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('classes');
  const [showNewClassModal, setShowNewClassModal] = useState(false);
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: 'Advanced Mathematics',
      subject: 'Mathematics',
      students: 25,
      progress: 75,
      description: 'Advanced mathematical concepts and problem solving',
      completedLessons: 15,
      totalLessons: 20,
      nextClass: 'Tomorrow at 2:00 PM',
      averageScore: 85
    },
    {
      id: 2,
      name: 'Physics 101',
      subject: 'Physics',
      students: 20,
      progress: 60,
      description: 'Introduction to physics principles',
      completedLessons: 8,
      totalLessons: 15,
      nextClass: 'Friday at 3:30 PM',
      averageScore: 78
    }
  ]);

  const [newClass, setNewClass] = useState({
    name: '',
    subject: '',
    description: '',
  });

  const handleCreateClass = (e) => {
    e.preventDefault();
    const newClassEntry = {
      id: classes.length + 1,
      ...newClass,
      students: 0,
      progress: 0,
      completedLessons: 0,
      totalLessons: 10,
      nextClass: 'Not scheduled',
      averageScore: 0
    };
    setClasses([...classes, newClassEntry]);
    setNewClass({ name: '', subject: '', description: '' });
    setShowNewClassModal(false);
  };

  return (
    <DashboardLayout>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
              <AcademicCapIcon className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Classes</p>
              <h3 className="text-xl font-semibold text-gray-900">{classes.length}</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-green-100">
              <UserGroupIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <h3 className="text-xl font-semibold text-gray-900">
                {classes.reduce((sum, c) => sum + c.students, 0)}
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-yellow-100">
              <ClockIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Hours Taught</p>
              <h3 className="text-xl font-semibold text-gray-900">124</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-3 rounded-lg bg-blue-100">
              <CheckCircleIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg. Score</p>
              <h3 className="text-xl font-semibold text-gray-900">
                {Math.round(classes.reduce((sum, c) => sum + c.averageScore, 0) / classes.length)}%
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Section */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Your Classes</h2>
            <button
              onClick={() => setShowNewClassModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              New Class
            </button>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-white rounded-lg border border-gray-200 hover:border-primary transition-colors p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{classItem.subject}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">
                    {classItem.students} Students
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{classItem.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Completed Lessons</p>
                    <p className="text-sm font-medium text-gray-900">
                      {classItem.completedLessons} / {classItem.totalLessons}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Next Class</p>
                    <p className="text-sm font-medium text-gray-900">{classItem.nextClass}</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{classItem.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary rounded-full h-full transition-all duration-500 ease-out"
                      style={{ width: `${classItem.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Class Modal */}
      {showNewClassModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Create New Class</h3>
                <button
                  onClick={() => setShowNewClassModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <form onSubmit={handleCreateClass} className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="className" className="block text-sm font-medium text-gray-700">
                    Class Name
                  </label>
                  <input
                    type="text"
                    id="className"
                    value={newClass.name}
                    onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={newClass.subject}
                    onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={newClass.description}
                    onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                    rows={3}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewClassModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Create Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default TeacherDashboard;