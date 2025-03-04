import React from 'react';
import { Menu, User, Home, Heart, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-lg hover:bg-gray-100 transition-colors md:hidden">
              <Menu size={24} />
            </button>
            <a href="/" className="flex items-center space-x-2">
              <Home size={24} className="text-indigo-600" />
              <span className="font-bold text-xl">Houacre</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
            <a href="/buy" className="text-gray-700 hover:text-indigo-600 transition-colors">Buy</a>
            <a href="/rent" className="text-gray-700 hover:text-indigo-600 transition-colors">Rent</a>
            <a href="/sell" className="text-gray-700 hover:text-indigo-600 transition-colors">Sell</a>
            <a href="/agents" className="text-gray-700 hover:text-indigo-600 transition-colors">Agents</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <Heart size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-0 right-0 bg-indigo-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <a href="/login" className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <User size={20} />
              <span>Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;