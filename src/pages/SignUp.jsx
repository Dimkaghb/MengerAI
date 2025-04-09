import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

const SignUp = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleRoleSelect = (role) => {
    setIsOpen(false);
    if (role === 'student') {
      navigate('/onboarding');
    } else {
      navigate('/teacher');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
            <p className="mt-2 text-gray-600">
              Join Menger and start your learning journey today
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Sign up
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Role Selection Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-lg p-8 max-w-sm mx-auto"
          >
            <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
              Choose your role
            </Dialog.Title>
            <Dialog.Description className="text-gray-600 mb-6">
              Are you a student or a teacher?
            </Dialog.Description>

            <div className="space-y-4">
              <button
                onClick={() => handleRoleSelect('student')}
                className="w-full btn-primary"
              >
                I'm a Student
              </button>
              <button
                onClick={() => handleRoleSelect('teacher')}
                className="w-full bg-gray-100 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                I'm a Teacher
              </button>
            </div>
          </motion.div>
        </div>
      </Dialog>
    </div>
  );
};

export default SignUp; 