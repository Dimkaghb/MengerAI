import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  UserGroupIcon,
  ChatBubbleLeftIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

// Mock team data
const mockTeam = {
  code: 'TEAM123',
  members: [
    { id: 1, name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Michael Rodriguez', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=3' },
  ],
  session: {
    duration: 1800, // 30 minutes in seconds
    topic: 'Algebra Basics',
    status: 'active',
  },
};

// Mock chat messages
const mockMessages = [
  { id: 1, user: 'Sarah Chen', message: 'Hey everyone! Ready to learn?', time: '2:30 PM' },
  { id: 2, user: 'Michael Rodriguez', message: 'Yes! Let\'s do this!', time: '2:31 PM' },
  { id: 3, user: 'Emma Wilson', message: 'I\'ve been reviewing the materials', time: '2:32 PM' },
];

const JoinTeam = () => {
  const [teamCode, setTeamCode] = useState('');
  const [isJoined, setIsJoined] = useState(false);
  const [timeLeft, setTimeLeft] = useState(mockTeam.session.duration);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  useEffect(() => {
    let timer;
    if (isJoined && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isJoined, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleJoin = (e) => {
    e.preventDefault();
    if (teamCode === mockTeam.code) {
      setIsJoined(true);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {!isJoined ? (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <UserGroupIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900">Join Team Session</h1>
              <p className="mt-2 text-gray-600">
                Enter the team code to join your study group
              </p>
            </div>

            <form onSubmit={handleJoin} className="max-w-sm mx-auto">
              <div className="mb-4">
                <input
                  type="text"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  placeholder="Enter team code"
                  className="input-field"
                />
              </div>
              <button type="submit" className="w-full btn-primary">
                Join Session
              </button>
            </form>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Session Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {mockTeam.session.topic}
                  </h2>
                  <div className="flex items-center text-primary">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span className="text-xl font-semibold">
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  {mockTeam.members.map((member) => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>

              {/* Video Player Placeholder */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Video player will be here</p>
                </div>
              </div>
            </div>

            {/* Chat Sidebar */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftIcon className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Group Chat</h3>
              </div>

              {/* Messages */}
              <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{msg.user}</span>
                      <span className="text-sm text-gray-500">{msg.time}</span>
                    </div>
                    <p className="text-gray-600">{msg.message}</p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 input-field"
                />
                <button type="submit" className="btn-primary">
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinTeam; 