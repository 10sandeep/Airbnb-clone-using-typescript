import React from 'react';
import { Heart } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface WishlistButtonProps {
  propertyId: string;
  className?: string;
}

export default function WishlistButton({ propertyId, className = '' }: WishlistButtonProps) {
  const { user } = useAuth();
  const [isWishlisted, setIsWishlisted] = React.useState(
    user?.favorites?.includes(propertyId) || false
  );

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    setIsWishlisted(!isWishlisted);
    // Here you would typically make an API call to update the user's wishlist
  };

  return (
    <button
      onClick={handleWishlist}
      className={`p-2 rounded-full bg-white/80 hover:bg-white transition-colors ${className}`}
    >
      <Heart
        className={`w-5 h-5 ${
          isWishlisted ? 'fill-rose-500 stroke-rose-500' : 'stroke-gray-600'
        }`}
      />
    </button>
  );
}