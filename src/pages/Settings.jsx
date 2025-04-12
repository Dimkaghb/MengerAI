import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpenIcon,
  UserGroupIcon,
  TrophyIcon,
  UserIcon,
  Cog6ToothIcon,
  BellIcon,
  LockClosedIcon,
  GlobeAltIcon,
  SwatchIcon,
  DevicePhoneMobileIcon,
  SunIcon,
  LanguageIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import mengerLogo from '../assets/menger3.png';

const Settings = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      weeklyReport: true,
      newCourses: false,
      teamUpdates: true
    },
    privacy: {
      profileVisibility: 'public',
      showProgress: true,
      shareActivity: true,
    },
    appearance: {
      theme: 'light',
      fontSize: 'medium',
      colorScheme: 'indigo',
    },
    language: 'english',
  });

  const handleNotificationChange = (key) => {
    setSettings({
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: !settings.notifications[key],
      },
    });
  };

  const handlePrivacyChange = (key, value) => {
    setSettings({
      ...settings,
      privacy: {
        ...settings.privacy,
        [key]: typeof value === 'boolean' ? !settings.privacy[key] : value,
      },
    });
  };

  const handleAppearanceChange = (key, value) => {
    setSettings({
      ...settings,
      appearance: {
        ...settings.appearance,
        [key]: value,
      },
    });
  };

  const handleLanguageChange = (value) => {
    setSettings({
      ...settings,
      language: value,
    });
  };

  const handleSaveSettings = () => {
    // Process saving settings (e.g., send to server)
    alert('Settings saved!');
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
                My Courses
              </Link>
              <Link
                to="/join-team"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserGroupIcon className="h-5 w-5 mr-3" />
                Teams
              </Link>
              <Link
                to="/competition"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TrophyIcon className="h-5 w-5 mr-3" />
                Competitions
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserIcon className="h-5 w-5 mr-3" />
                Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-gray-700 bg-indigo-50 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Cog6ToothIcon className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Боковая панель (скрыта на мобильных устройствах) */}
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
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
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
              className="flex items-center px-4 py-2 text-gray-700 bg-indigo-50 rounded-lg"
            >
              <Cog6ToothIcon className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </div>
        </nav>
      </div>

      {/* Основное содержимое */}
      <div className="md:ml-64 flex-1 py-4 md:py-8 px-4 md:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Settings</h1>
          
          <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 mb-4 md:mb-8">
            <div className="flex items-center mb-4">
              <BellIcon className="h-5 w-5 md:h-6 md:w-6 text-indigo-600 mr-2" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Notifications</h2>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">Email Notifications</h3>
                  <p className="text-xs md:text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
                    checked={settings.notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">Push Notifications</h3>
                  <p className="text-xs md:text-sm text-gray-500">Receive notifications in the browser</p>
                </div>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
                    checked={settings.notifications.push}
                    onChange={() => handleNotificationChange('push')}
                  />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">Weekly Report</h3>
                  <p className="text-xs md:text-sm text-gray-500">Receive a weekly progress report</p>
                </div>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
                    checked={settings.notifications.weeklyReport}
                    onChange={() => handleNotificationChange('weeklyReport')}
                  />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">New Courses</h3>
                  <p className="text-xs md:text-sm text-gray-500">Notifications about new courses</p>
                </div>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
                    checked={settings.notifications.newCourses}
                    onChange={() => handleNotificationChange('newCourses')}
                  />
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm md:text-base font-medium text-gray-900">Team Updates</h3>
                  <p className="text-xs md:text-sm text-gray-500">Notifications about team actions</p>
                </div>
                <label className="inline-flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 md:w-5 md:h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" 
                    checked={settings.notifications.teamUpdates}
                    onChange={() => handleNotificationChange('teamUpdates')}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 mb-4 md:mb-8">
            <div className="flex items-center mb-4">
              <GlobeAltIcon className="h-5 w-5 md:h-6 md:w-6 text-indigo-600 mr-2" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Privacy</h2>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <div>
                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2">Profile Visibility</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="public"
                      name="profileVisibility"
                      type="radio"
                      value="public"
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      checked={settings.privacy.profileVisibility === 'public'}
                      onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                    />
                    <label htmlFor="public" className="ml-2 text-sm md:text-base text-gray-700">Public</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="friends"
                      name="profileVisibility"
                      type="radio"
                      value="friends"
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      checked={settings.privacy.profileVisibility === 'friends'}
                      onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                    />
                    <label htmlFor="friends" className="ml-2 text-sm md:text-base text-gray-700">Only Friends</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="private"
                      name="profileVisibility"
                      type="radio"
                      value="private"
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      checked={settings.privacy.profileVisibility === 'private'}
                      onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                    />
                    <label htmlFor="private" className="ml-2 text-sm md:text-base text-gray-700">Private</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 mb-4 md:mb-8">
            <div className="flex items-center mb-4">
              <SunIcon className="h-5 w-5 md:h-6 md:w-6 text-indigo-600 mr-2" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2">Font Size</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 border rounded-md text-sm ${
                      settings.appearance.fontSize === 'small' 
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => handleAppearanceChange('fontSize', 'small')}
                  >
                    Small
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-md text-sm ${
                      settings.appearance.fontSize === 'medium' 
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => handleAppearanceChange('fontSize', 'medium')}
                  >
                    Medium
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-md text-sm ${
                      settings.appearance.fontSize === 'large' 
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => handleAppearanceChange('fontSize', 'large')}
                  >
                    Large
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2">Color Scheme</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 border rounded-md text-sm ${
                      settings.appearance.colorScheme === 'light' 
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => handleAppearanceChange('colorScheme', 'light')}
                  >
                    Light
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-md text-sm ${
                      settings.appearance.colorScheme === 'dark' 
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => handleAppearanceChange('colorScheme', 'dark')}
                  >
                    Dark
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-md text-sm ${
                      settings.appearance.colorScheme === 'system' 
                        ? 'bg-indigo-100 border-indigo-300 text-indigo-800' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                    onClick={() => handleAppearanceChange('colorScheme', 'system')}
                  >
                    System
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 mb-4 md:mb-8">
            <div className="flex items-center mb-4">
              <LanguageIcon className="h-5 w-5 md:h-6 md:w-6 text-indigo-600 mr-2" />
              <h2 className="text-lg md:text-xl font-bold text-gray-900">Language</h2>
            </div>
            
            <div>
              <select
                className="block w-full p-2 border border-gray-300 rounded-md text-sm md:text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                value={settings.language}
                onChange={(e) => handleLanguageChange(e)}
              >
                <option value="english">English</option>
                <option value="russian">Русский</option>
                <option value="kazakh">Қазақша</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              className="px-4 py-2 md:px-5 md:py-2.5 bg-indigo-600 text-white rounded-md text-sm md:text-base font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleSaveSettings}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 