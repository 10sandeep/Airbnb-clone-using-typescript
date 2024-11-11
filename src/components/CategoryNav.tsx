import React from 'react';
import { Palmtree, Mountain, Building, TreePine, Warehouse, Castle, Tent, Anchor } from 'lucide-react';

const categories = [
  { label: 'Beach', icon: Palmtree },
  { label: 'Mountain', icon: Mountain },
  { label: 'City', icon: Building },
  { label: 'Countryside', icon: TreePine },
  { label: 'Loft', icon: Warehouse },
  { label: 'Castle', icon: Castle },
  { label: 'Camping', icon: Tent },
  { label: 'Boat', icon: Anchor },
];

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = React.useState('');

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-center">
        <div className="flex gap-8 min-w-max justify-center">
          {categories.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label)}
              className={`flex flex-col items-center gap-2 py-2 px-4 rounded-lg transition-colors ${
                activeCategory === label
                  ? 'text-rose-500 border-b-2 border-rose-500'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
