import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
  FireIcon,
  StarIcon,
  BoltIcon,
  ClockIcon,
  CodeBracketIcon,
  BeakerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BookOpenIcon,
  UserIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  AcademicCapIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/layout/Layout';
import mengerLogo from '../assets/menger3.png';

// Mock data for competitions
const competitionsData = [
  {
    id: 'cs',
    title: 'Computer Science',
    description: 'Questions on algorithms, data structures, and programming languages',
    participants: 254,
    difficulty: 'Medium',
    attemptedByUser: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    icon: CodeBracketIcon,
    color: 'from-blue-400 to-indigo-600',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
  },
  {
    id: 'physics',
    title: 'Physics', 
    description: 'Test your knowledge of mechanics, electricity, and thermodynamics',
    participants: 198,
    difficulty: 'Hard',
    attemptedByUser: false,
    image: 'https://images.unsplash.com/photo-1636466497217-26a42b172bf5',
    icon: BoltIcon,
    color: 'from-purple-400 to-indigo-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    description: 'Organic and inorganic chemistry, chemical reactions',
    participants: 132,
    difficulty: 'Easy',
    attemptedByUser: false,
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6',
    icon: BeakerIcon,
    color: 'from-green-400 to-teal-500',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-200',
  }
];

// Mock leaderboard data
const mockLeaderboard = [
  { name: 'Alex Johnson', score: 850, rank: 1 },
  { name: 'Sarah Williams', score: 800, rank: 2 },
  { name: 'Michael Brown', score: 750, rank: 3 },
  { name: 'Emily Davis', score: 700, rank: 4 },
  { name: 'David Wilson', score: 650, rank: 5 },
];

// Add mock average user data after mockLeaderboard
const mockAverageUserData = {
  timePerQuestion: [15, 18, 12, 20, 14, 16, 19],
  scores: [85, 78, 92, 70, 88, 82, 75]
};

// Gamification badges
const badges = [
  { id: 'speedster', name: 'Speedster', description: 'Answered all questions in record time', icon: '⚡', unlocked: true },
  { id: 'perfectionist', name: 'Perfectionist', description: 'Got all answers correct', icon: '🎯', unlocked: false },
  { id: 'streakmaster', name: 'Streak Master', description: 'Maintained a 5-question streak', icon: '🔥', unlocked: true },
];

// Computer Science questions
const csQuestions = [
  {
    id: 1,
    question: "Which of these data structures operates on the LIFO principle?",
    options: ["Queue", "Stack", "Hash table", "Array"],
    correctAnswer: 1,
    timeLimit: 30,
    points: 100,
  },
  {
    id: 2,
    question: "What is the worst-case search time in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1,
    timeLimit: 25,
    points: 150,
  },
  {
    id: 3,
    question: "What is SQL?",
    options: ["Markup language", "Programming language", "Database query language", "Data transfer protocol"],
    correctAnswer: 2,
    timeLimit: 20,
    points: 100,
  },
  {
    id: 4,
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble sort", "Insertion sort", "Quick sort", "Selection sort"],
    correctAnswer: 2,
    timeLimit: 30,
    points: 150,
  },
  {
    id: 5,
    question: "What is recursion?",
    options: ["Software design method", "A function that calls itself", "Data type", "Encryption algorithm"],
    correctAnswer: 1,
    timeLimit: 25,
    points: 120,
  },
  {
    id: 6,
    question: "What is a REST API?",
    options: ["Database", "Architectural style for web services", "File format", "Programming language"],
    correctAnswer: 1,
    timeLimit: 30,
    points: 130,
  },
  {
    id: 7,
    question: "Which programming language was developed by James Gosling?",
    options: ["Python", "Java", "C++", "JavaScript"],
    correctAnswer: 1,
    timeLimit: 20,
    points: 100,
  },
];

// Physics questions
const physicsQuestions = [
  {
    id: 1,
    question: "Which formula describes Newton's second law?",
    options: ["F = ma", "E = mc²", "F = G(m₁m₂)/r²", "p = mv"],
    correctAnswer: 0,
    timeLimit: 30,
    points: 100,
  },
  {
    id: 2,
    question: "What is the unit of electrical resistance?",
    options: ["Watt", "Ampere", "Volt", "Ohm"],
    correctAnswer: 3,
    timeLimit: 25,
    points: 150,
  },
  {
    id: 3,
    question: "Which formula describes Ohm's law?",
    options: ["I = U/R", "U = I*R", "R = U/I", "P = U*I"],
    correctAnswer: 1,
    timeLimit: 20,
    points: 100,
  },
  {
    id: 4,
    question: "What is moment of inertia?",
    options: ["Measure of body speed", "Measure of body energy", "Measure of resistance to rotation", "Measure of body acceleration"],
    correctAnswer: 2,
    timeLimit: 30,
    points: 150,
  },
  {
    id: 5,
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "3,000 km/s", "330 m/s"],
    correctAnswer: 0,
    timeLimit: 25,
    points: 120,
  },
  {
    id: 6,
    question: "Who formulated the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
    correctAnswer: 1,
    timeLimit: 20,
    points: 100,
  },
  {
    id: 7,
    question: "What is absolute zero temperature?",
    options: ["0°C", "-100°C", "-273.15°C", "-459.67°F"],
    correctAnswer: 2,
    timeLimit: 25,
    points: 130,
  },
];

// Chemistry questions
const chemistryQuestions = [
  {
    id: 1,
    question: "What is the chemical formula for water?",
    options: ["CO₂", "H₂O", "O₂", "NaCl"],
    correctAnswer: 1,
    timeLimit: 30,
    points: 100,
  },
  {
    id: 2,
    question: "What is pH?",
    options: ["Density indicator", "Mass indicator", "Acidity indicator", "Radioactivity indicator"],
    correctAnswer: 2,
    timeLimit: 25,
    points: 150,
  },
  {
    id: 3,
    question: "Which element has the symbol 'Au'?",
    options: ["Silver", "Copper", "Argon", "Gold"],
    correctAnswer: 3,
    timeLimit: 20,
    points: 100,
  },
  {
    id: 4,
    question: "What is molar mass?",
    options: ["Mass of one molecule", "Mass of one mole of a substance", "Mass of an atomic nucleus", "Mass of all electrons in an atom"],
    correctAnswer: 1,
    timeLimit: 30,
    points: 150,
  },
  {
    id: 5,
    question: "Which element is the most abundant in Earth's crust?",
    options: ["Hydrogen", "Carbon", "Iron", "Oxygen"],
    correctAnswer: 3,
    timeLimit: 25,
    points: 120,
  },
  {
    id: 6,
    question: "Who created the periodic table of elements?",
    options: ["Antoine Lavoisier", "Dmitri Mendeleev", "Marie Sklodowska-Curie", "John Dalton"],
    correctAnswer: 1,
    timeLimit: 20,
    points: 100,
  },
  {
    id: 7,
    question: "What are isotopes?",
    options: ["Atoms with the same number of protons", "Atoms with different numbers of protons", "Atoms with the same number of neutrons", "Atoms with the same number of electrons"],
    correctAnswer: 0,
    timeLimit: 30,
    points: 130,
  },
];

// Combine all questions into one object
const allQuestions = {
  cs: csQuestions,
  physics: physicsQuestions,
  chemistry: chemistryQuestions,
};

const Competition = () => {
  const { competitionId } = useParams();
  const navigate = useNavigate();
  const [isListView, setIsListView] = useState(true);
  const [currentCompetition, setCurrentCompetition] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameState, setGameState] = useState('waiting'); // waiting, playing, finished
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [streak, setStreak] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [answerStats, setAnswerStats] = useState({
    correct: 0,
    incorrect: 0,
    timeouts: 0,
    averageTime: 0,
    timePerQuestion: []
  });
  const [chartsReady, setChartsReady] = useState(false);

  useEffect(() => {
    if (competitionId) {
      const competition = competitionsData.find(c => c.id === competitionId);
      if (competition) {
        setCurrentCompetition(competition);
        setIsListView(false);
      }
    } else {
      setIsListView(true);
      setCurrentCompetition(null);
      setGameState('waiting');
    }
  }, [competitionId]);

  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      handleTimeUp();
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  useEffect(() => {
    setChartsReady(true);
  }, []);

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    const questions = allQuestions[currentCompetition.id];
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    const timeSpent = questions[currentQuestion].timeLimit - timeLeft;
    
    if (isCorrect) {
      setScore(prev => prev + questions[currentQuestion].points);
      setStreak(prev => prev + 1);
      setAnswerStats(prev => ({
        ...prev,
        correct: prev.correct + 1,
        timePerQuestion: [...prev.timePerQuestion, timeSpent],
        averageTime: (prev.averageTime * prev.timePerQuestion.length + timeSpent) / (prev.timePerQuestion.length + 1)
      }));
    } else {
      setStreak(0);
      setAnswerStats(prev => ({
        ...prev,
        incorrect: prev.incorrect + 1,
        timePerQuestion: [...prev.timePerQuestion, timeSpent],
        averageTime: (prev.averageTime * prev.timePerQuestion.length + timeSpent) / (prev.timePerQuestion.length + 1)
      }));
    }
    
    setShowFeedback(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setTimeLeft(questions[currentQuestion + 1].timeLimit);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setGameState('finished');
      }
    }, 2000);
  };

  const handleTimeUp = () => {
    setStreak(0);
    setAnswerStats(prev => ({
      ...prev,
      timeouts: prev.timeouts + 1,
      timePerQuestion: [...prev.timePerQuestion, allQuestions[currentCompetition.id][currentQuestion].timeLimit]
    }));
    
    const questions = allQuestions[currentCompetition.id];
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setTimeLeft(questions[currentQuestion + 1].timeLimit);
    } else {
      setGameState('finished');
    }
  };

  const startGame = () => {
    setGameState('playing');
    const questions = allQuestions[currentCompetition.id];
    setTimeLeft(questions[0].timeLimit);
  };

  const handleSelectCompetition = (competition) => {
    setCurrentCompetition(competition);
    setIsListView(false);
    setGameState('waiting');
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    navigate(`/competition/${competition.id}`);
  };

  const handleBackToList = () => {
    setIsListView(true);
    setCurrentCompetition(null);
    setGameState('waiting');
    navigate('/competition');
  };

  const filteredCompetitions = competitionsData.filter(
    comp => comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    if (isListView) {
      return (
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Competitions</h1>
            <p className="text-gray-600 mt-2">Test your knowledge and compete with other students</p>
          </div>

          <div className="mb-8 max-w-md">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search competitions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitions.map((competition) => (
              <motion.div
                key={competition.id}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className={`h-24 bg-gradient-to-r ${competition.color} flex items-center justify-center relative`}>
                  <competition.icon className="h-12 w-12 text-white" />
                  {competition.attemptedByUser && (
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className={`text-xl font-bold ${competition.textColor}`}>
                      {competition.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(
                        competition.difficulty === 'Easy' ? 1 : 
                        competition.difficulty === 'Medium' ? 2 : 3
                      )].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-4 w-4 ${competition.textColor}`}
                          fill="currentColor" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 h-12">
                    {competition.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center text-gray-500">
                      <UserGroupIcon className="h-5 w-5 mr-1" />
                      <span>{competition.participants} participants</span>
                    </div>
                    
                    <div className="text-sm font-medium">
                      {competition.attemptedByUser ? (
                        <span className="text-green-500">Completed</span>
                      ) : (
                        <span className="text-gray-500">Not attempted</span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSelectCompetition(competition)}
                    className={`w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r ${competition.color} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    {competition.attemptedByUser ? 'Try Again' : 'Start Competition'}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    }

    if (gameState === 'waiting') {
      return (
        <div className="p-8">
          <button
            onClick={handleBackToList}
            className="mb-8 flex items-center text-indigo-600 hover:text-indigo-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to list
          </button>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {currentCompetition?.title}
              </h1>
              <div className={`px-3 py-1 rounded-full ${currentCompetition?.textColor} bg-opacity-10 text-sm font-medium`}>
                {currentCompetition?.difficulty}
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              {currentCompetition?.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <UserGroupIcon className="h-8 w-8 text-indigo-500 mr-4" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{currentCompetition?.participants}</div>
                  <div className="text-sm text-gray-500">Participants</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <ClockIcon className="h-8 w-8 text-indigo-500 mr-4" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{allQuestions[currentCompetition?.id]?.length || 0}</div>
                  <div className="text-sm text-gray-500">Questions</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex items-center">
                <TrophyIcon className="h-8 w-8 text-indigo-500 mr-4" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">850</div>
                  <div className="text-sm text-gray-500">Max points</div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-8">
              <div className="flex items-start mb-2">
                <ClockIcon className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <p className="text-indigo-800">You have limited time for each question. Try to answer quickly and correctly.</p>
              </div>
              <div className="flex items-start">
                <FireIcon className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <p className="text-indigo-800">A series of correct answers in a row increases your points.</p>
              </div>
            </div>
            
            <button
              onClick={startGame}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-sm transition-colors"
            >
              Start Competition
            </button>
          </div>
        </div>
      );
    }

    if (gameState === 'playing') {
      return (
        <div className="p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-indigo-600">
                  <TrophyIcon className="h-6 w-6 mr-2" />
                  <span className="text-xl font-bold">{score}</span>
                </div>
                {streak > 0 && (
                  <div className="flex items-center text-orange-500">
                    <FireIcon className="h-6 w-6 mr-2" />
                    <span className="text-xl font-bold">{streak}x</span>
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gray-600">
                  <span className="font-medium">{currentQuestion + 1}</span>
                  <span> / {allQuestions[currentCompetition.id].length}</span>
                </div>
                <div className="flex items-center text-red-500">
                  <ClockIcon className="h-6 w-6 mr-2" />
                  <span className="text-xl font-bold">{timeLeft}</span>
                </div>
              </div>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {allQuestions[currentCompetition.id][currentQuestion].question}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allQuestions[currentCompetition.id][currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-lg text-lg font-medium transition-colors ${
                      selectedAnswer === null
                        ? 'bg-gray-50 hover:bg-gray-100 text-gray-900 border border-gray-200'
                        : selectedAnswer === index
                        ? index === allQuestions[currentCompetition.id][currentQuestion].correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : index === allQuestions[currentCompetition.id][currentQuestion].correctAnswer
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-50 text-gray-900 border border-gray-200'
                    }`}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      );
    }

    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Competition Results
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-4">
                <TrophyIcon className="h-10 w-10 text-indigo-600" />
              </div>
              <div className="text-6xl font-bold text-indigo-600 mb-2">
                {score}
              </div>
              <p className="text-xl text-gray-600">
                Points earned
              </p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Your Score</span>
                <span className="text-sm text-gray-600">{score}/{allQuestions[currentCompetition.id].reduce((sum, q) => sum + q.points, 0)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-4 rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    width: `${(score / allQuestions[currentCompetition.id].reduce((sum, q) => sum + q.points, 0)) * 100}%` 
                  }}
                ></div>
              </div>
            </div>

            {/* Statistical Information */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Statistics</h3>
              
              {/* Simple Statistics Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Correct Answers</div>
                  <div className="text-xl font-bold text-green-500">{answerStats.correct}</div>
                  <div className="text-xs text-gray-500">out of {allQuestions[currentCompetition.id].length}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Incorrect Answers</div>
                  <div className="text-xl font-bold text-red-500">{answerStats.incorrect}</div>
                  <div className="text-xs text-gray-500">mistakes made</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Time Outs</div>
                  <div className="text-xl font-bold text-gray-500">{answerStats.timeouts}</div>
                  <div className="text-xs text-gray-500">questions skipped</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Avg. Time</div>
                  <div className="text-xl font-bold text-indigo-500">{answerStats.averageTime.toFixed(1)}s</div>
                  <div className="text-xs text-gray-500">per question</div>
                </div>
              </div>

              {/* Visual Progress Bars */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Accuracy</span>
                    <span className="text-sm font-medium text-gray-600">
                      {((answerStats.correct / (answerStats.correct + answerStats.incorrect + answerStats.timeouts)) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${(answerStats.correct / allQuestions[currentCompetition.id].length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Time Performance</span>
                    <span className="text-sm font-medium text-gray-600">
                      {Math.min(100, ((30 - answerStats.averageTime) / 30 * 100)).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, ((30 - answerStats.averageTime) / 30 * 100))}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Completion</span>
                    <span className="text-sm font-medium text-gray-600">
                      {((answerStats.correct + answerStats.incorrect + answerStats.timeouts) / allQuestions[currentCompetition.id].length * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${(answerStats.correct + answerStats.incorrect + answerStats.timeouts) / allQuestions[currentCompetition.id].length * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Time Distribution */}
              <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                <h4 className="text-sm font-medium text-gray-600 mb-4">Performance Overview</h4>
                
                {/* Legend */}
                <div className="flex items-center justify-center space-x-6 mb-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">You</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-300 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Average</span>
                  </div>
                </div>

                {/* Graphs Container */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Time Performance Graph */}
                  <div>
                    <h5 className="text-xs font-medium text-gray-500 mb-2 text-center">Time per Question</h5>
                    <div className="relative h-40 bg-gray-50 rounded-lg p-2">
                      {/* Grid lines */}
                      <div className="absolute inset-0 grid grid-cols-1 grid-rows-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="border-t border-gray-100">
                            <span className="absolute -left-1 -top-3 text-[10px] text-gray-400">
                              {30 - i * 10}s
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Graph */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Your performance line */}
                        <path
                          d={`M ${answerStats.timePerQuestion.map((time, i) => 
                            `${i * (100 / (answerStats.timePerQuestion.length - 1))},${100 - (time / 30 * 100)}`
                          ).join(' L ')}`}
                          fill="none"
                          stroke="#818CF8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="transition-all duration-500"
                        />

                        {/* Average users line */}
                        <path
                          d={`M ${mockAverageUserData.timePerQuestion.map((time, i) => 
                            `${i * (100 / (mockAverageUserData.timePerQuestion.length - 1))},${100 - (time / 30 * 100)}`
                          ).join(' L ')}`}
                          fill="none"
                          stroke="#E9D5FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="3,3"
                          className="transition-all duration-500"
                        />

                        {/* Data points */}
                        {answerStats.timePerQuestion.map((time, i) => (
                          <circle
                            key={i}
                            cx={i * (100 / (answerStats.timePerQuestion.length - 1))}
                            cy={100 - (time / 30 * 100)}
                            r="2"
                            fill="#818CF8"
                            className="transition-all duration-500"
                          />
                        ))}
                      </svg>

                      {/* X-axis labels */}
                      <div className="flex justify-between mt-1">
                        {answerStats.timePerQuestion.map((_, i) => (
                          <div key={i} className="text-[10px] text-gray-400">Q{i + 1}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Score Performance Graph */}
                  <div>
                    <h5 className="text-xs font-medium text-gray-500 mb-2 text-center">Score per Question</h5>
                    <div className="relative h-40 bg-gray-50 rounded-lg p-2">
                      {/* Grid lines */}
                      <div className="absolute inset-0 grid grid-cols-1 grid-rows-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="border-t border-gray-100">
                            <span className="absolute -left-1 -top-3 text-[10px] text-gray-400">
                              {150 - i * 50}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Graph */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Your score line */}
                        <path
                          d={`M ${allQuestions[currentCompetition.id].map((q, i) => 
                            `${i * (100 / (allQuestions[currentCompetition.id].length - 1))},${100 - (q.points / 150 * 100)}`
                          ).join(' L ')}`}
                          fill="none"
                          stroke="#818CF8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="transition-all duration-500"
                        />

                        {/* Average users line */}
                        <path
                          d={`M ${mockAverageUserData.scores.map((score, i) => 
                            `${i * (100 / (mockAverageUserData.scores.length - 1))},${100 - (score / 150 * 100)}`
                          ).join(' L ')}`}
                          fill="none"
                          stroke="#E9D5FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray="3,3"
                          className="transition-all duration-500"
                        />

                        {/* Data points */}
                        {allQuestions[currentCompetition.id].map((q, i) => (
                          <circle
                            key={i}
                            cx={i * (100 / (allQuestions[currentCompetition.id].length - 1))}
                            cy={100 - (q.points / 150 * 100)}
                            r="2"
                            fill="#818CF8"
                            className="transition-all duration-500"
                          />
                        ))}
                      </svg>

                      {/* X-axis labels */}
                      <div className="flex justify-between mt-1">
                        {allQuestions[currentCompetition.id].map((_, i) => (
                          <div key={i} className="text-[10px] text-gray-400">Q{i + 1}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Accuracy</div>
                  <div className="text-xl font-bold text-gray-900">
                    {((answerStats.correct / (answerStats.correct + answerStats.incorrect + answerStats.timeouts)) * 100).toFixed(1)}%
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Avg. Time</div>
                  <div className="text-xl font-bold text-gray-900">
                    {answerStats.averageTime.toFixed(1)}s
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Best Streak</div>
                  <div className="text-xl font-bold text-gray-900">{streak}</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-sm text-gray-600">Points/Question</div>
                  <div className="text-xl font-bold text-gray-900">
                    {(score / allQuestions[currentCompetition.id].length).toFixed(0)}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left text-sm md:text-base">
                  <p className="text-gray-500">Correct answers:</p>
                  <p className="text-gray-500">Maximum points:</p>
                  <p className="text-gray-500">Your result:</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{Math.floor(score / 100)}/{allQuestions[currentCompetition.id].length}</p>
                  <p className="font-medium text-gray-900">{allQuestions[currentCompetition.id].reduce((sum, q) => sum + q.points, 0)}</p>
                  <p className="font-medium text-gray-900">{Math.floor((score / allQuestions[currentCompetition.id].reduce((sum, q) => sum + q.points, 0)) * 100)}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gamification Badges */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id}
                  className={`p-4 rounded-lg border-2 ${
                    badge.unlocked 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : 'border-gray-200 bg-gray-50 opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{badge.icon}</div>
                  <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Section */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Rating</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockLeaderboard.map((participant) => (
                    <tr key={participant.rank} className={participant.rank <= 3 ? 'bg-indigo-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {participant.rank === 1 ? '🥇' : participant.rank === 2 ? '🥈' : participant.rank === 3 ? '🥉' : participant.rank}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{participant.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{participant.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => {
                setGameState('waiting');
                setScore(0);
                setCurrentQuestion(0);
                setStreak(0);
              }}
              className="px-6 md:px-8 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50"
            >
              Play Again
            </button>
            
            <button
              onClick={handleBackToList}
              className="px-6 md:px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
            >
              All Competitions
            </button>
          </div>
        </div>
      </div>
    );
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
              to="/join-team"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <UserGroupIcon className="h-5 w-5 mr-3" />
              Teams
            </Link>
            <Link
              to="/competition"
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
        {renderContent()}
      </div>
    </div>
  );
};

export default Competition; 