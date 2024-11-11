import React, { useState } from 'react';
import { Menu, Search, User2, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-rose-500 text-2xl font-bold">airbnb</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="w-full">
              <div className="relative flex items-center w-full h-12 rounded-full border hover:shadow-lg transition duration-200">
                <input
                  type="text"
                  placeholder="Start your search"
                  className="w-full h-full rounded-full pl-8 pr-4 focus:outline-none"
                />
                <div className="absolute right-2 bg-rose-500 p-2 rounded-full text-white cursor-pointer">
                  <Search size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-100">
              <Globe size={18} />
              <span>EN</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-2 p-2 rounded-full border hover:shadow-md"
              >
                <Menu size={18} />
                <User2 size={18} />
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {user ? (
                      <>
                        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Profile
                        </a>
                        <a href="/favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Favorites
                        </a>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Log in
                        </a>
                        <a href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Sign up
                        </a>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}