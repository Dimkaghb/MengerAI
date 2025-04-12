import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-sora font-bold text-primary">
              Menger
            </Link>
            <p className="mt-4 text-gray-600">
              Расширение возможностей учащихся через образование с помощью ИИ
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Продукт</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-primary">
                  Функции
                </Link>
              </li>
              <li>
                <Link to="/competition" className="text-gray-600 hover:text-primary">
                  Соревнования
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-primary">
                  Как это работает
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-primary">
                  Начать
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Правовая информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-primary">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-primary">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 