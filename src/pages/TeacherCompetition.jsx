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
} from '@heroicons/react/24/outline';
import mengerLogo from '../assets/menger3.png';

const TeacherCompetition = () => {
  const [competitions, setCompetitions] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newCompetition, setNewCompetition] = useState({
    name: '',
    area: '',
    description: '',
    timeLimit: 30,
    difficulty: 'Medium',
  });

  const areas = [
    { id: 'cs', name: 'Computer Science' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'math', name: 'Mathematics' },
    { id: 'biology', name: 'Biology' },
  ];

  const difficulties = ['Easy', 'Medium', 'Hard'];

  const handleCreateCompetition = (e) => {
    e.preventDefault();
    const competition = {
      ...newCompetition,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      participants: 0,
      status: 'Active',
    };
    setCompetitions([competition, ...competitions]);
    setIsCreating(false);
    setNewCompetition({
      name: '',
      area: '',
      description: '',
      timeLimit: 30,
      difficulty: 'Medium',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-sm">
        <div className="p-6">
          <Link to="/" className="flex items-center">
            <img src={mengerLogo} alt="Menger Logo" className="h-14" />
          </Link>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-2">
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
      <div className="ml-64 flex-1 py-8 px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
              <p className="text-gray-600 mt-2">Create and manage your competitions</p>
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <PlusCircleIcon className="h-5 w-5 mr-2" />
              Create Competition
            </button>
          </div>

          {/* Create Competition Modal */}
          {isCreating && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Competition</h2>
                  <button
                    onClick={() => setIsCreating(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
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
                        Subject Area *
                      </label>
                      <select
                        required
                        value={newCompetition.area}
                        onChange={(e) => setNewCompetition({ ...newCompetition, area: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="">Select subject area</option>
                        {areas.map((area) => (
                          <option key={area.id} value={area.id}>
                            {area.name}
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time Limit (seconds)
                        </label>
                        <input
                          type="number"
                          value={newCompetition.timeLimit}
                          onChange={(e) => setNewCompetition({ ...newCompetition, timeLimit: parseInt(e.target.value) })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          min="10"
                          max="300"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Difficulty Level
                        </label>
                        <select
                          value={newCompetition.difficulty}
                          onChange={(e) => setNewCompetition({ ...newCompetition, difficulty: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          {difficulties.map((difficulty) => (
                            <option key={difficulty} value={difficulty}>
                              {difficulty}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <button
                        type="button"
                        onClick={() => setIsCreating(false)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        Create Competition
                      </button>
                    </div>
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
                        Area
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Difficulty
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Participants
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
                            {areas.find(a => a.id === competition.area)?.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            competition.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                            competition.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {competition.difficulty}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {competition.participants}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCompetition; 