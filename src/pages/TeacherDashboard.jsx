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
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar - Hidden on mobile, shown on larger screens */}
      <div className="hidden md:fixed md:flex md:w-64 md:flex-col md:h-screen bg-white shadow-sm">
        <div className="p-6">
          <Link to="/" className="flex items-center">
            <img src={mengerLogo} alt="Menger Logo" className="h-14" />
          </Link>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 bg-indigo-50 rounded-lg"
            >
              <BookOpenIcon className="h-5 w-5 mr-3" />
              My Courses
            </Link>
            <Link
              to="/teacher/competition"
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

      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="flex items-center">
            <img src={mengerLogo} alt="Menger Logo" className="h-10" />
          </Link>
          <div className="flex space-x-2">
            <Link to="/dashboard" className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <BookOpenIcon className="h-6 w-6" />
            </Link>
            <Link to="/teacher/competition" className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <TrophyIcon className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <UserIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="md:ml-64 flex-1 p-4 md:p-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage your classes and competitions</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsCreatingClass(true)}
                className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 w-full sm:w-auto"
              >
                <PlusCircleIcon className="h-5 w-5 mr-2" />
                New Class
              </button>
              <button
                onClick={() => setIsCreatingCompetition(true)}
                className="flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full sm:w-auto"
              >
                <TrophyIcon className="h-5 w-5 mr-2" />
                Create Competition
              </button>
            </div>
          </div>

          {/* Tabs - Scrollable on mobile */}
          <div className="mb-8 overflow-x-auto">
            <nav className="flex space-x-4 min-w-max">
              <button
                onClick={() => setActiveTab('classes')}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap ${
                  activeTab === 'classes'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <BookOpenIcon className="h-5 w-5 inline mr-2" />
                Classes
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap ${
                  activeTab === 'students'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <UserGroupIcon className="h-5 w-5 inline mr-2" />
                Students
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap ${
                  activeTab === 'analytics'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <ChartBarIcon className="h-5 w-5 inline mr-2" />
                Analytics
              </button>
            </nav>
          </div>

          {/* Analytics Dashboard - Responsive grid */}
          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Class Performance */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Performance</h3>
                <div className="space-y-4">
                  {classPerformance.map((item) => (
                    <div key={item.name}>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm mb-1">
                        <span className="text-gray-600 mb-1 sm:mb-0">{item.name}</span>
                        <span className="text-gray-900">{item.performance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.performance}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Engagement */}
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Engagement</h3>
                <div className="space-y-4">
                  {studentEngagement.map((student) => (
                    <div key={student.name}>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm mb-1">
                        <span className="text-gray-600 mb-1 sm:mb-0">{student.name}</span>
                        <span className="text-gray-900">{student.engagement}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${student.engagement}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Modals - Full screen on mobile */}
          {isCreatingClass && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg w-full md:max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Class</h2>
                  <button
                    onClick={() => setIsCreatingClass(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleCreateClass}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Class Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newClass.name}
                        onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter class name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={newClass.subject}
                        onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select subject</option>
                        {subjects.map((subject) => (
                          <option key={subject.id} value={subject.id}>
                            {subject.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={newClass.description}
                        onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        rows="3"
                        placeholder="Enter class description"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Associated Competitions
                      </label>
                      <div className="space-y-2">
                        {/* Competition selection will be implemented here */}
                        <p className="text-sm text-gray-500">
                          You can add competitions to this class after creation.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => setIsCreatingClass(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        Create Class
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {isCreatingCompetition && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg w-full md:max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Competition</h2>
                  <button
                    onClick={() => setIsCreatingCompetition(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleCreateCompetition}>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Competition Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newCompetition.name}
                        onChange={(e) => setNewCompetition({ ...newCompetition, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Enter competition name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        required
                        value={newCompetition.subject}
                        onChange={(e) => setNewCompetition({ ...newCompetition, subject: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select subject</option>
                        {subjects.map((subject) => (
                          <option key={subject.id} value={subject.id}>
                            {subject.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={newCompetition.description}
                        onChange={(e) => setNewCompetition({ ...newCompetition, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        rows="3"
                        placeholder="Enter competition description"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time Limit (minutes) *
                        </label>
                        <div className="flex items-center">
                          <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <input
                            type="number"
                            required
                            min="1"
                            max="180"
                            value={newCompetition.timeLimit}
                            onChange={(e) => setNewCompetition({ ...newCompetition, timeLimit: parseInt(e.target.value) })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Difficulty Level *
                        </label>
                        <div className="flex items-center">
                          <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <select
                            required
                            value={newCompetition.difficulty}
                            onChange={(e) => setNewCompetition({ ...newCompetition, difficulty: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          >
                            {difficulties.map((difficulty) => (
                              <option key={difficulty.id} value={difficulty.id}>
                                {difficulty.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => setIsCreatingCompetition(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Create Competition
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Tables - Responsive with horizontal scroll */}
          {activeTab === 'classes' && (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-4 md:px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Your Classes</h2>
              </div>
              
              {classes.length === 0 ? (
                <div className="p-8 text-center">
                  <AcademicCapIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">No classes created yet.</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Click the "New Class" button to get started.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Subject
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Students
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Competitions
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Created
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {classes.map((classItem) => (
                          <tr key={classItem.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{classItem.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">
                                {subjects.find(s => s.id === classItem.subject)?.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {classItem.studentCount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {classItem.competitions?.length || 0}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                {classItem.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(classItem.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Competition List - Responsive with horizontal scroll */}
          {activeTab === 'classes' && competitions.length > 0 && (
            <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-4 md:px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Competitions</h2>
              </div>
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Subject
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Difficulty
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Time Limit
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {competitions.map((competition) => (
                        <tr key={competition.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{competition.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {subjects.find(s => s.id === competition.subject)?.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full
                              ${competition.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                                competition.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'}`}>
                              {difficulties.find(d => d.id === competition.difficulty)?.name}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {competition.timeLimit} min
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              {competition.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(competition.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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