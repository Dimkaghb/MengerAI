import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  LightBulbIcon,
  BeakerIcon,
  BookOpenIcon,
  VideoCameraIcon,
  PencilIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const learningGoals = [
  {
    id: 'academic',
    title: 'Academic Excellence',
    description: 'Improve grades and academic performance',
    icon: AcademicCapIcon
  },
  {
    id: 'career',
    title: 'Career Growth',
    description: 'Learn skills for professional development',
    icon: BriefcaseIcon
  },
  {
    id: 'personal',
    title: 'Personal Interest',
    description: 'Learn for personal enrichment',
    icon: LightBulbIcon
  },
  {
    id: 'exam',
    title: 'Test Preparation',
    description: 'Prepare for upcoming exams',
    icon: BeakerIcon
  }
];

const learningStyles = [
  {
    id: 'visual',
    title: 'Visual Learning',
    description: 'Learn through diagrams and videos',
    icon: VideoCameraIcon
  },
  {
    id: 'reading',
    title: 'Reading/Writing',
    description: 'Learn through text and notes',
    icon: BookOpenIcon
  },
  {
    id: 'practice',
    title: 'Practice-Based',
    description: 'Learn by doing exercises',
    icon: PencilIcon
  },
  {
    id: 'social',
    title: 'Social Learning',
    description: 'Learn through discussion',
    icon: UserGroupIcon
  }
];

const steps = [
  {
    id: 'subjects',
    title: 'Favorite Subjects',
    description: 'What subjects do you enjoy learning the most?',
    type: 'multiSelect',
    options: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Literature', 'Computer Science'],
  },
  {
    id: 'motivation',
    title: 'Motivation Type',
    description: 'What motivates you to learn?',
    type: 'select',
    options: ['Achievement', 'Understanding', 'Social', 'Personal Growth'],
  },
  {
    id: 'time',
    title: 'Study Time',
    description: 'How much time can you dedicate to learning daily?',
    type: 'select',
    options: ['30 minutes', '1 hour', '2 hours', '3+ hours'],
  },
  {
    id: 'style',
    title: 'Learning Style',
    description: 'How do you prefer to learn?',
    type: 'select',
    options: ['Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic'],
  },
  {
    id: 'level',
    title: 'Skill Level',
    description: 'What is your current skill level?',
    type: 'select',
    options: ['Beginner', 'Intermediate', 'Advanced'],
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);

  const toggleGoal = (goalId) => {
    setSelectedGoals(prev => 
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (value) => {
    setFormData({
      ...formData,
      [steps[currentStep].id]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response
    const mockResponse = {
      summary: "A highly visual learner who prefers clear explanations and repetition.",
      plan: {
        techniques: ["Feynman", "Spaced Repetition"],
        daily: [
          { day: "Monday", task: "Review algebra basics (Feynman)" },
          { day: "Tuesday", task: "Practice problems (Pomodoro)" }
        ]
      }
    };
    
    // Store in localStorage for demo
    localStorage.setItem('learningPlan', JSON.stringify(mockResponse));
    setLoading(false);
    navigate('/plan');
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600 mb-6">{currentStepData.description}</p>
              <div className="space-y-4">
                {currentStepData.options.map((subject) => (
                  <label key={subject} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData[currentStepData.id]?.includes(subject)}
                      onChange={(e) => {
                        const current = formData[currentStepData.id] || [];
                        if (e.target.checked) {
                          handleChange([...current, subject]);
                        } else {
                          handleChange(current.filter(item => item !== subject));
                        }
                      }}
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-gray-700">{subject}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What are your learning goals?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningGoals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedGoals.includes(goal.id)
                        ? 'border-primary bg-primary bg-opacity-10'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <goal.icon className="h-8 w-8 mb-2" />
                    <h3 className="font-medium">{goal.title}</h3>
                    <p className="text-sm text-gray-600">{goal.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Choose your learning style
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedStyle === style.id
                        ? 'border-primary bg-primary bg-opacity-10'
                        : 'border-gray-200 hover:border-primary'
                    }`}
                  >
                    <style.icon className="h-8 w-8 mb-2" />
                    <h3 className="font-medium">{style.title}</h3>
                    <p className="text-sm text-gray-600">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600 mb-6">{currentStepData.description}</p>
              <div className="space-y-4">
                {currentStepData.options.map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="studyTime"
                      value={option}
                      checked={formData[currentStepData.id] === option}
                      onChange={(e) => handleChange(e.target.value)}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {currentStepData.title}
              </h2>
              <p className="text-gray-600 mb-6">{currentStepData.description}</p>
              <div className="space-y-4">
                {currentStepData.options.map((option) => (
                  <label key={option} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="skillLevel"
                      value={option}
                      checked={formData[currentStepData.id] === option}
                      onChange={(e) => handleChange(e.target.value)}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 text-gray-600 hover:text-gray-900"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="btn-primary ml-auto"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                currentStep === steps.length - 1 ? 'Get Started' : 'Next'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding; 