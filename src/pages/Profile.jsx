import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  UserGroupIcon,
  TrophyIcon,
  UserIcon,
  Cog6ToothIcon,
  AcademicCapIcon,
  FireIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import mengerLogo from '../assets/menger3.png';

// Мок-данные пользователя
const userProfile = {
  name: 'Артыкбай Арнур',
  username: 'artyqbay',
  email: 'artyqbay@gmail.com',
  avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
  bio: 'Студент технического вуза. Интересуюсь математикой, программированием и физикой. Люблю решать сложные задачи.',
  level: 3,
  xp: 2450,
  xpToNextLevel: 1000,
  totalXp: 5450,
  achievements: [
    { id: 1, name: 'Первые шаги', description: 'Пройдите свой первый курс', icon: AcademicCapIcon, completed: true },
    { id: 2, name: 'Постоянство', description: '7-дневная серия обучения', icon: FireIcon, completed: true },
    { id: 3, name: 'Эксперт', description: 'Получите 5 отличных оценок подряд', icon: TrophyIcon, completed: false },
  ],
  stats: {
    coursesCompleted: 8,
    competitionsWon: 3,
    streak: 12,
    totalHours: 42
  }
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    name: userProfile.name,
    username: userProfile.username,
    email: userProfile.email,
    bio: userProfile.bio
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Здесь был бы код для сохранения изменений на сервере
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile({
      name: userProfile.name,
      username: userProfile.username,
      email: userProfile.email,
      bio: userProfile.bio
    });
    setIsEditing(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Мобильный хедер */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-sm">
        <Link to="/" className="flex items-center">
          <img src={mengerLogo} alt="Menger Logo" className="h-10" />
        </Link>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-sm">
          <nav className="py-2">
            <div className="px-4 space-y-1">
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpenIcon className="h-5 w-5 mr-3" />
                Мои курсы
              </Link>
              <Link
                to="/join-team"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserGroupIcon className="h-5 w-5 mr-3" />
                Команды
              </Link>
              <Link
                to="/competition"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TrophyIcon className="h-5 w-5 mr-3" />
                Соревнования
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-gray-700 bg-indigo-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserIcon className="h-5 w-5 mr-3" />
                Профиль
              </Link>
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Cog6ToothIcon className="h-5 w-5 mr-3" />
                Настройки
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Боковая панель (скрыта на мобильных) */}
      <div className="hidden md:block w-64 bg-white h-screen sticky top-0 shadow-sm">
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
              Мои курсы
            </Link>
            <Link
              to="/join-team"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <UserGroupIcon className="h-5 w-5 mr-3" />
              Команды
            </Link>
            <Link
              to="/competition"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <TrophyIcon className="h-5 w-5 mr-3" />
              Соревнования
            </Link>
            <Link
              to="/profile"
              className="flex items-center px-4 py-2 text-gray-700 bg-indigo-50 rounded-lg"
            >
              <UserIcon className="h-5 w-5 mr-3" />
              Профиль
            </Link>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Cog6ToothIcon className="h-5 w-5 mr-3" />
              Настройки
            </Link>
          </div>
        </nav>
      </div>

      {/* Основное содержимое */}
      <div className="md:ml-64 flex-1 py-4 md:py-8 px-4 md:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Мой профиль</h1>
          
          <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-6 md:mb-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-32 md:h-40 relative">
              {!isEditing && (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100"
                >
                  <PencilIcon className="h-5 w-5 text-gray-600" />
                </button>
              )}
              
              {isEditing && (
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button 
                    onClick={handleSave}
                    className="bg-white p-2 rounded-full hover:bg-gray-100"
                  >
                    <CheckIcon className="h-5 w-5 text-green-600" />
                  </button>
                  <button 
                    onClick={handleCancel}
                    className="bg-white p-2 rounded-full hover:bg-gray-100"
                  >
                    <XMarkIcon className="h-5 w-5 text-red-600" />
                  </button>
                </div>
              )}
              
              <div className="absolute -bottom-12 left-4 md:left-8">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name} 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white"
                />
              </div>
            </div>
            
            <div className="pt-16 px-4 md:px-8 pb-6 md:pb-8">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input 
                      type="text"
                      name="name"
                      value={editedProfile.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Имя пользователя</label>
                    <input 
                      type="text"
                      name="username"
                      value={editedProfile.username}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={editedProfile.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">О себе</label>
                    <textarea
                      name="bio"
                      value={editedProfile.bio}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{userProfile.name}</h2>
                  <p className="text-gray-500">@{userProfile.username}</p>
                  <p className="text-gray-500">{userProfile.email}</p>
                  <p className="mt-4 text-gray-700">{userProfile.bio}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Прогресс</h2>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-100 mr-3 md:mr-4">
                  <span className="text-indigo-600 font-bold">{userProfile.level}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs md:text-sm font-medium text-gray-700">Уровень {userProfile.level}</span>
                    <span className="text-xs md:text-sm font-medium text-gray-700">{userProfile.xp}/{userProfile.xp + userProfile.xpToNextLevel} XP</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${(userProfile.xp / (userProfile.xp + userProfile.xpToNextLevel)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2 md:gap-4">
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-base md:text-xl font-bold text-gray-900">{userProfile.stats.coursesCompleted}</div>
                  <div className="text-xs md:text-sm text-gray-600">Курсов завершено</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-base md:text-xl font-bold text-gray-900">{userProfile.stats.competitionsWon}</div>
                  <div className="text-xs md:text-sm text-gray-600">Соревнований выиграно</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-base md:text-xl font-bold text-gray-900">{userProfile.stats.streak}</div>
                  <div className="text-xs md:text-sm text-gray-600">Дней подряд</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 md:p-4">
                  <div className="text-base md:text-xl font-bold text-gray-900">{userProfile.stats.totalHours}</div>
                  <div className="text-xs md:text-sm text-gray-600">Часов обучения</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Достижения</h2>
              
              <div className="space-y-3 md:space-y-4">
                {userProfile.achievements.map(achievement => (
                  <div key={achievement.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full mr-3 md:mr-4 ${
                      achievement.completed ? 'bg-green-100' : 'bg-gray-100'
                    }`}>
                      <achievement.icon className={`h-5 w-5 md:h-6 md:w-6 ${
                        achievement.completed ? 'text-green-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-sm md:text-base font-medium ${
                        achievement.completed ? 'text-gray-900' : 'text-gray-500'
                      }`}>{achievement.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500">{achievement.description}</p>
                    </div>
                    {achievement.completed && (
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Выполнено
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 