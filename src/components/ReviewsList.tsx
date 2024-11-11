import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../types';
import { format } from 'date-fns';

interface ReviewsListProps {
  reviews: Review[];
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="font-semibold text-lg">
            {(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)}
          </span>
        </div>
        <span className="text-gray-500">·</span>
        <span>{reviews.length} reviews</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-start gap-4">
              <img
                src={review.user.avatar}
                alt={review.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{review.user.name}</h4>
                <p className="text-sm text-gray-500">
                  {format(new Date(review.date), 'MMMM yyyy')}
                </p>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}