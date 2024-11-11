import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Bed, Bath, Wifi, Star, Calendar } from 'lucide-react';
import { properties } from '../data/properties';
import ImageGallery from '../components/ImageGallery';
import ReviewsList from '../components/ReviewsList';
import ReviewForm from '../components/ReviewForm';
import Map from '../components/Map';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  if (!property) {
    return <div className="container mx-auto px-4 py-8">Property not found</div>;
  }

  const handleBooking = () => {
    // Calculate total amount based on dates and price
    const totalAmount = property.price * 3; // Example calculation
    
    // Navigate to confirmation page with booking details
    navigate('/booking/confirmation', {
      state: {
        booking: {
          propertyId: property.id,
          checkIn,
          checkOut,
          guests,
          totalAmount,
        },
      },
    });
  };

  const handleReviewSubmit = (rating: number, comment: string) => {
    console.log('New review:', { rating, comment });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <ImageGallery images={property.images} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400" />
              {property.rating}
            </span>
            <span className="text-gray-500">·</span>
            <span>{property.reviews.length} reviews</span>
            <span className="text-gray-500">·</span>
            <span>{property.location}</span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span>{property.beds} beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>{property.baths} baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              <span>Wifi</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{property.description}</p>

          <div className="border-t pt-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <Map lat={property.coordinates.lat} lng={property.coordinates.lng} />
          </div>

          <div className="border-t pt-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-6 mb-8">
            <h2 className="text-xl font-semibold mb-6">Reviews</h2>
            <ReviewsList reviews={property.reviews} />
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Write a review</h2>
            <ReviewForm onSubmit={handleReviewSubmit} />
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <div>
          <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-2xl font-bold">${property.price}</span>
              <span className="text-gray-500">per night</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Book now
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-500 text-center">
              You won't be charged yet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}