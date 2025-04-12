import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrophyIcon,
  UserGroupIcon,
  BookOpenIcon,
  UserIcon,
  Cog6ToothIcon,
  PlusCircleIcon,
  AcademicCapIcon,
  PlusIcon,
  XMarkIcon,
  CalendarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import mengerLogo from '../assets/menger3.png';

const TeacherCompetition = () => {
  const [showNewCompetitionModal, setShowNewCompetitionModal] = useState(false);
  const [competitions, setCompetitions] = useState([
    {
      id: 1,
      name: 'Math Challenge',
      subject: 'Mathematics',
      date: '2024-03-20T14:00',
      duration: 60,
      difficulty: 'Intermediate',
      maxParticipants: 30,
      currentParticipants: 15,
      description: 'Test your mathematical problem-solving skills'
    },
    {
      id: 2,
      name: 'Physics Quiz',
      subject: 'Physics',
      date: '2024-03-22T15:30',
      duration: 45,
      difficulty: 'Beginner',
      maxParticipants: 25,
      currentParticipants: 12,
      description: 'Basic physics concepts and principles'
    }
  ]);

  const [newCompetition, setNewCompetition] = useState({
    name: '',
    subject: '',
    date: '',
    duration: '',
    difficulty: 'Beginner',
    maxParticipants: '',
    description: ''
  });

  const handleCreateCompetition = (e) => {
    e.preventDefault();
    const newCompetitionEntry = {
      id: competitions.length + 1,
      ...newCompetition,
      currentParticipants: 0
    };
    setCompetitions([...competitions, newCompetitionEntry]);
    setNewCompetition({
      name: '',
      subject: '',
      date: '',
      duration: '',
      difficulty: 'Beginner',
      maxParticipants: '',
      description: ''
    });
    setShowNewCompetitionModal(false);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white fixed left-0 top-16 bottom-0 border-r border-gray-200 overflow-y-auto">
        <nav className="p-6">
          <div className="space-y-2">
            <Link
              to="/dashboard"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <BookOpenIcon className="h-5 w-5 mr-3" />
              My Courses
            </Link>
            <Link
              to="/teacher/competition"
              className="flex items-center px-4 py-2 text-gray-700 bg-indigo-50 rounded-lg"
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
      <div className="ml-64">
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
                <p className="text-gray-600 mt-2">Create and manage your competitions</p>
              </div>
              <button
                onClick={() => setShowNewCompetitionModal(true)}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Create Competition
              </button>
            </div>

            {/* New Competition Modal */}
            {showNewCompetitionModal && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Create New Competition</h3>
                      <button
                        onClick={() => setShowNewCompetitionModal(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <form onSubmit={handleCreateCompetition} className="px-6 py-4">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="competitionName" className="block text-sm font-medium text-gray-700">
                          Competition Name
                        </label>
                        <input
                          type="text"
                          id="competitionName"
                          value={newCompetition.name}
                          onChange={(e) => setNewCompetition({ ...newCompetition, name: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
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
                          value={newCompetition.subject}
                          onChange={(e) => setNewCompetition({ ...newCompetition, subject: e.target.value })}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date & Time
                          </label>
                          <input
                            type="datetime-local"
                            id="date"
                            value={newCompetition.date}
                            onChange={(e) => setNewCompetition({ ...newCompetition, date: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                            Duration (minutes)
                          </label>
                          <input
                            type="number"
                            id="duration"
                            value={newCompetition.duration}
                            onChange={(e) => setNewCompetition({ ...newCompetition, duration: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            required
                            min="1"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
                            Difficulty
                          </label>
                          <select
                            id="difficulty"
                            value={newCompetition.difficulty}
                            onChange={(e) => setNewCompetition({ ...newCompetition, difficulty: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            required
                          >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-700">
                            Max Participants
                          </label>
                          <input
                            type="number"
                            id="maxParticipants"
                            value={newCompetition.maxParticipants}
                            onChange={(e) => setNewCompetition({ ...newCompetition, maxParticipants: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                            required
                            min="1"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          id="description"
                          value={newCompetition.description}
                          onChange={(e) => setNewCompetition({ ...newCompetition, description: e.target.value })}
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowNewCompetitionModal(false)}
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Create Competition
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Competition List */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Your Competitions</h2>
              </div>
              
              {competitions.length === 0 ? (
                <div className="p-8 text-center">
                  <AcademicCapIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">No competitions created yet.</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Click the "Create Competition" button to get started.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
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
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Difficulty
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Participants
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
                            <div className="text-sm text-gray-500">{competition.subject}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {new Date(competition.date).toLocaleString()}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">
                              {competition.duration} minutes
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(competition.difficulty)}`}>
                              {competition.difficulty}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {competition.currentParticipants} / {competition.maxParticipants}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCompetition; 