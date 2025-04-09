import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

// Mock data
const mockTeams = [
  {
    id: 1,
    name: 'Math Masters',
    topic: 'Algebra',
    members: 4,
    progress: 75,
    rank: 1,
    xp: 1200,
  },
  {
    id: 2,
    name: 'Physics Phantoms',
    topic: 'Physics',
    members: 3,
    progress: 60,
    rank: 2,
    xp: 900,
  },
  {
    id: 3,
    name: 'Chemistry Champions',
    topic: 'Chemistry',
    members: 5,
    progress: 45,
    rank: 3,
    xp: 750,
  },
];

const topics = ['All', 'Math', 'Physics', 'Chemistry', 'Biology'];

const Competition = () => {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [activeTab, setActiveTab] = useState('teams');

  const filteredTeams = mockTeams.filter(
    team => selectedTopic === 'All' || team.topic === selectedTopic
  );

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Learning Competitions
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join teams, compete with peers, and earn rewards while learning together
          </p>
        </div>

        {/* Topic Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedTopic === topic
                  ? 'bg-lavender text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('teams')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'teams'
                  ? 'bg-lavender text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Teams
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex items-center px-4 py-2 rounded-lg ${
                activeTab === 'leaderboard'
                  ? 'bg-lavender text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <TrophyIcon className="h-5 w-5 mr-2" />
              Leaderboard
            </button>
          </div>

          {activeTab === 'teams' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {team.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {team.members} members
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-900">{team.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-lavender h-2 rounded-full"
                          style={{ width: `${team.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <ChartBarIcon className="h-5 w-5 mr-1" />
                        <span>{team.xp} XP</span>
                      </div>
                      <button className="btn-primary text-sm">
                        Join Team
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="space-y-4">
              {filteredTeams
                .sort((a, b) => b.xp - a.xp)
                .map((team, index) => (
                  <motion.div
                    key={team.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 flex items-center justify-center bg-lavender text-white rounded-full font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900">
                          {team.name}
                        </h3>
                        <p className="text-sm text-gray-600">{team.topic}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-600">
                        <FireIcon className="h-5 w-5 mr-1" />
                        <span>{team.xp} XP</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <UserGroupIcon className="h-5 w-5 mr-1" />
                        <span>{team.members}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Competition; 