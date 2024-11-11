import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Camera, Mail, Phone, Home, CreditCard } from 'lucide-react';

export default function UserProfile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'payments', label: 'Payment Methods' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-rose-500 to-rose-600">
            <div className="absolute -bottom-16 left-8">
              <div className="relative">
                <img
                  src={user?.avatar || 'https://via.placeholder.com/128'}
                  alt={user?.name}
                  className="w-32 h-32 rounded-full border-4 border-white"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg">
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 px-8 pb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-gray-600">Member since 2024</p>
              </div>
              <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Tabs */}
            <div className="border-b mb-8">
              <nav className="flex gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-rose-500 border-b-2 border-rose-500'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user?.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Home className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">123 Main St, City, Country</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Payment Method</p>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tab contents would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}