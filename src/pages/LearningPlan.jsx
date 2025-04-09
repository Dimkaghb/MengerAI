import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon, 
  ClockIcon, 
  ChartBarIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const LearningPlan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('learningPlan');
    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    } else {
      navigate('/onboarding');
    }
  }, [navigate]);

  if (!plan) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Personalized Learning Plan
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {plan.summary}
            </p>
          </div>

          {/* Recommended Techniques */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-2 text-primary" />
              Recommended Learning Techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plan.plan.techniques.map((technique, index) => (
                <motion.div
                  key={technique}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {technique}
                  </h3>
                  <p className="text-gray-600">
                    {technique === 'Feynman' 
                      ? 'Explain concepts in simple terms to deepen understanding'
                      : 'Review material at increasing intervals to improve retention'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <ClockIcon className="h-6 w-6 mr-2 text-primary" />
              Your Weekly Schedule
            </h2>
            <div className="space-y-4">
              {plan.plan.daily.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-24 font-semibold text-gray-900">{day.day}</div>
                  <div className="flex-1 text-gray-600">{day.task}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <ChartBarIcon className="h-6 w-6 mr-2 text-primary" />
              Track Your Progress
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-gray-600">Completed Tasks</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-gray-600">Study Hours</div>
              </div>
              <div className="card text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-gray-600">XP Points</div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn-primary text-lg px-8 py-3 inline-flex items-center"
            >
              <CheckCircleIcon className="h-5 w-5 mr-2" />
              Accept Plan & Start Learning
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningPlan; 