import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChatBubbleLeftIcon,
  ClockIcon,
  TrophyIcon,
  FireIcon,
} from '@heroicons/react/24/outline';

// Mock course data
const mockCourse = {
  id: 1,
  title: 'Algebra Basics',
  description: 'Master the fundamentals of algebra with this comprehensive course.',
  video: 'https://www.youtube.com/embed/5E3rT4zKP4E',
  tags: ['Math', 'Beginner'],
  xp: 100,
};

const aiResponses = {
  feynman: {
    title: 'Feynman Technique',
    description: 'Explain the concept in your own words as if teaching someone else.',
    prompt: 'Try explaining this concept in simple terms:',
  },
  pomodoro: {
    title: '20/5 Focus Timer',
    description: 'Focus for 20 minutes, then take a 5-minute break.',
    timer: true,
  },
  quiz: {
    title: 'Quick Quiz',
    description: 'Test your understanding with these questions:',
    questions: [
      {
        question: 'What is the distributive property?',
        options: ['a(b+c) = ab + ac', 'a+b = b+a', 'a(bc) = (ab)c', 'None of the above'],
        correct: 0,
      },
      {
        question: 'What is the order of operations?',
        options: ['PEMDAS', 'PEDMAS', 'BODMAS', 'All of the above'],
        correct: 3,
      },
    ],
  },
};

const Course = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('video');
  const [aiMethod, setAiMethod] = useState(null);
  const [timer, setTimer] = useState(1200); // 20 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});

  // Mock timer functionality
  React.useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleQuizAnswer = (questionIndex, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answerIndex,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={mockCourse.video}
                  title={mockCourse.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Course Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">{mockCourse.title}</h1>
                  <div className="flex space-x-2">
                    {mockCourse.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{mockCourse.description}</p>
              </div>

              {/* Tabs */}
              <div className="border-t border-gray-200">
                <div className="flex space-x-4 p-4">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'video'
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Video
                  </button>
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'notes'
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Notes
                  </button>
                </div>

                {activeTab === 'video' && (
                  <div className="prose max-w-none">
                    <h3>Video Notes</h3>
                    <p>Take notes while watching the video...</p>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="prose max-w-none">
                    <h3>Course Notes</h3>
                    <p>Your course notes will appear here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">AI Learning Assistant</h2>
            <div className="space-y-4">
              <button
                onClick={() => setAiMethod('feynman')}
                className={`w-full px-4 py-2 rounded-lg ${
                  aiMethod === 'feynman'
                    ? 'bg-primary text-white'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Feynman Technique
              </button>
              <button
                onClick={() => setAiMethod('pomodoro')}
                className="w-full bg-mint text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
              >
                Start 20/5 Timer
              </button>
              <button
                onClick={() => setAiMethod('quiz')}
                className="w-full bg-coral text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
              >
                Take Quick Quiz
              </button>
            </div>

            {/* AI Method Content */}
            <div className="mt-6">
              {aiMethod === 'feynman' && (
                <div>
                  <p className="text-gray-700 mb-2">
                    {aiResponses[aiMethod].prompt}
                  </p>
                  <textarea
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    rows="4"
                    placeholder="Type your explanation here..."
                  ></textarea>
                </div>
              )}

              {aiMethod === 'pomodoro' && (
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-4">
                    {formatTime(timer)}
                  </div>
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className="btn-primary"
                  >
                    {isTimerRunning ? 'Pause' : 'Start'} Timer
                  </button>
                </div>
              )}

              {aiMethod === 'quiz' && (
                <div className="space-y-4">
                  {aiResponses[aiMethod].questions.map((q, qIndex) => (
                    <div key={qIndex} className="space-y-2">
                      <p className="font-medium text-gray-900">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((option, oIndex) => (
                          <button
                            key={oIndex}
                            onClick={() => handleQuizAnswer(qIndex, oIndex)}
                            className={`w-full text-left p-2 rounded-lg ${
                              quizAnswers[qIndex] === oIndex
                                ? 'bg-primary text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Gamification Stats */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrophyIcon className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-600">XP Earned</span>
                </div>
                <span className="font-semibold text-gray-900">100 XP</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FireIcon className="h-5 w-5 text-coral mr-2" />
                  <span className="text-gray-600">Streak</span>
                </div>
                <span className="font-semibold text-gray-900">3 days</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-mint mr-2" />
                  <span className="text-gray-600">Time Spent</span>
                </div>
                <span className="font-semibold text-gray-900">45 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course; 