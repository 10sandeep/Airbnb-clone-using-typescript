import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { properties } from '../data/properties';
import SearchFilters from '../components/SearchFilters';
import PropertyCard from '../components/PropertyCard';
import CategoryNav from '../components/CategoryNav';
import FilterDrawer from '../components/FilterDrawer';
import WishlistButton from '../components/WishlistButton';

export default function HomePage() {
  const navigate = useNavigate();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>(null);

  const filteredProperties = React.useMemo(() => {
    if (!activeFilters) return properties;

    return properties.filter((property) => {
      const { priceRange, rooms, bathrooms } = activeFilters;
      return (
        property.price >= priceRange[0] &&
        property.price <= priceRange[1] &&
        property.beds >= rooms &&
        property.baths >= bathrooms
      );
    });
  }, [activeFilters]);

  return (
    <>
      <SearchFilters />
      <CategoryNav />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Popular places to stay</h2>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => navigate(`/property/${property.id}`)}
              className="relative group"
            >
              <PropertyCard property={property} />
              <div className="absolute top-3 right-3">
                <WishlistButton propertyId={property.id} />
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No properties found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results</p>
          </div>
        )}
      </div>

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={setActiveFilters}
      />
    </>
  );
}