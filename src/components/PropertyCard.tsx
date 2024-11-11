import React from 'react';
import { Star } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="mt-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{property.location}</p>
        <p className="mt-2">
          <span className="font-semibold">${property.price}</span>
          <span className="text-gray-500"> night</span>
        </p>
      </div>
    </div>
  );
}