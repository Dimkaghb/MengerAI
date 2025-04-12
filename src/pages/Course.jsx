import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChatBubbleLeftIcon,
  ClockIcon,
  TrophyIcon,
  FireIcon,
  BookOpenIcon,
  AcademicCapIcon,
  UserGroupIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  ArrowPathIcon,
  SparklesIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import Footer from '../components/layout/Footer';

// Mock course data
const mockCourse = {
  id: 1,
  title: 'Algebra Basics',
  description: 'Master the basics of algebra with this comprehensive course. Learn fundamental concepts, formulas, and problem-solving methods.',
  video: 'https://www.youtube.com/embed/vDqOoI-4Z6M',
  tags: ['Mathematics', 'Beginner'],
  xp: 100,
  progress: 45,
  duration: '2 hours',
  lessons: [
    { id: 1, title: 'Introduction to Algebra', duration: '15 min', completed: true },
    { id: 2, title: 'Basic Operations', duration: '20 min', completed: true },
    { id: 3, title: 'Equations', duration: '25 min', completed: false },
    { id: 4, title: 'Functions', duration: '30 min', completed: false },
  ],
  relatedCompetitions: [
    { id: 'physics', name: 'Physics', participants: 198, difficulty: 'Medium' },
    { id: 'cs', name: 'Computer Science', participants: 254, difficulty: 'Hard' },
  ]
};

const aiResponses = {
  feynman: {
    title: 'Feynman Method',
    description: 'Explain the concept in your own words, as if you were teaching someone else.',
    prompt: 'Try to explain this concept in simple terms:',
  },
  pomodoro: {
    title: '20/5 Timer',
    description: 'Focus for 20 minutes, then take a 5-minute break.',
    timer: true,
  },
  quiz: {
    title: 'Quick Test',
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
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Mock timer functionality
  useEffect(() => {
    let interval;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
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

  const resetTimer = () => {
    setTimer(1200);
    setIsTimerRunning(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm"
            >
              {/* Video Player */}
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={mockCourse.video}
                  title={mockCourse.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
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
                        className="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{mockCourse.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Course Progress</span>
                    <span>{mockCourse.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${mockCourse.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t border-gray-200">
                <div className="flex space-x-4 p-4">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'video'
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <BookOpenIcon className="h-5 w-5 mr-2" />
                    Video
                  </button>
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'notes'
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <PencilIcon className="h-5 w-5 mr-2" />
                    Notes
                  </button>
                  <button
                    onClick={() => setActiveTab('competitions')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'competitions'
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <TrophyIcon className="h-5 w-5 mr-2" />
                    Competitions
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === 'video' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">Course Lessons</h3>
                      <div className="space-y-4">
                        {mockCourse.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center">
                              {lesson.completed ? (
                                <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                              ) : (
                                <div className="h-5 w-5 border-2 border-gray-300 rounded-full mr-3" />
                              )}
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <p className="text-sm text-gray-500">{lesson.duration}</p>
                              </div>
                            </div>
                            <button
                              className={`px-3 py-1 rounded-md text-sm ${
                                lesson.completed
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {lesson.completed ? 'Completed' : 'Start'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'notes' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-6"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">My Notes</h3>
                        <button
                          onClick={() => setIsEditing(!isEditing)}
                          className="text-primary hover:text-primary-dark"
                        >
                          {isEditing ? 'Save' : 'Edit'}
                        </button>
                      </div>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        disabled={!isEditing}
                        className="w-full h-48 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Start taking notes..."
                      />
                    </motion.div>
                  )}

                  {activeTab === 'competitions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-6"
                    >
                      <h3 className="text-lg font-semibold mb-4">Related Competitions</h3>
                      <div className="space-y-4">
                        {mockCourse.relatedCompetitions.map((competition) => (
                          <Link
                            key={competition.id}
                            to={`/competition/${competition.id}`}
                            className="block bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h4 className="text-lg font-medium text-gray-900">
                                  {competition.name}
                                </h4>
                                <div className="flex items-center space-x-4 mt-1 text-gray-600 text-sm">
                                  <div className="flex items-center">
                                    <UserGroupIcon className="h-4 w-4 mr-1" />
                                    <span>{competition.participants} participants</span>
                                  </div>
                                  <div className="flex items-center">
                                    <FireIcon className="h-4 w-4 mr-1" />
                                    <span>{competition.difficulty}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-indigo-100 rounded-full p-2">
                                <AcademicCapIcon className="h-6 w-6 text-indigo-600" />
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/competition"
                          className="flex justify-center items-center text-indigo-600 hover:text-indigo-800 font-medium mt-4"
                        >
                          View all competitions
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <SparklesIcon className="h-6 w-6 text-primary mr-2" />
              AI Learning Assistant
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => setAiMethod('feynman')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  aiMethod === 'feynman'
                    ? 'bg-primary text-white'
                    : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <LightBulbIcon className="h-5 w-5 mr-2" />
                Feynman Method
              </button>
              <button
                onClick={() => setAiMethod('pomodoro')}
                className="w-full flex items-center bg-mint text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <ClockIcon className="h-5 w-5 mr-2" />
                Start 20/5 Timer
              </button>
              <button
                onClick={() => setAiMethod('quiz')}
                className="w-full flex items-center bg-coral text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <AcademicCapIcon className="h-5 w-5 mr-2" />
                Take Quick Test
              </button>
            </div>

            {/* AI Method Content */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                {aiMethod === 'feynman' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <p className="text-gray-700 mb-2">
                      {aiResponses[aiMethod].prompt}
                    </p>
                    <textarea
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows="4"
                      placeholder="Enter your explanation..."
                    />
                    <button className="mt-3 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                      Submit
                    </button>
                  </motion.div>
                )}

                {aiMethod === 'pomodoro' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary mb-4">
                      {formatTime(timer)}
                    </div>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        {isTimerRunning ? 'Pause' : 'Start'}
                      </button>
                      <button
                        onClick={resetTimer}
                        className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ArrowPathIcon className="h-5 w-5" />
                      </button>
                    </div>
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg"
                      >
                        Great job! Time for a break!
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {aiMethod === 'quiz' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {aiResponses[aiMethod].questions.map((q, qIndex) => (
                      <div key={qIndex} className="space-y-2">
                        <p className="font-medium text-gray-900">{q.question}</p>
                        <div className="space-y-2">
                          {q.options.map((option, oIndex) => (
                            <button
                              key={oIndex}
                              onClick={() => handleQuizAnswer(qIndex, oIndex)}
                              className={`w-full text-left p-3 rounded-lg transition-colors ${
                                quizAnswers[qIndex] === oIndex
                                  ? 'bg-primary text-white'
                                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course; 