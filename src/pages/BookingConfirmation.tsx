import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Users, CreditCard } from 'lucide-react';

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { booking } = location.state || {};

  if (!booking) {
    navigate('/');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">
            Your reservation has been successfully confirmed. We've sent a confirmation email with all
            the details.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Check-in</p>
                <p className="text-gray-600">{booking.checkIn}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Check-out</p>
                <p className="text-gray-600">{booking.checkOut}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Users className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Guests</p>
                <p className="text-gray-600">{booking.guests} guests</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <CreditCard className="w-5 h-5 text-gray-400" />
              <div>
                <p className="font-medium">Total Amount</p>
                <p className="text-gray-600">${booking.totalAmount}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Return Home
          </button>
          <button
            onClick={() => navigate('/bookings')}
            className="flex-1 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
          >
            View All Bookings
          </button>
        </div>
      </div>
    </div>
  );
}