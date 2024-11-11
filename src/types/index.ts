export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: Review[];
  images: string[];
  type: string;
  beds: number;
  baths: number;
  description: string;
  host: {
    name: string;
    image: string;
    joinedDate: string;
  };
  amenities: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[];
}

export interface Review {
  id: string;
  propertyId: string;
  rating: number;
  comment: string;
  date: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
}