import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export default function FilterDrawer({ isOpen, onClose, onApply }: FilterDrawerProps) {
  const [priceRange, setPriceRange] = React.useState([0, 1000]);
  const [rooms, setRooms] = React.useState(1);
  const [bathrooms, setBathrooms] = React.useState(1);

  const handleApply = () => {
    onApply({ priceRange, rooms, bathrooms });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-60px)]">
          <div>
            <h3 className="text-lg font-semibold mb-4">Price range</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">Min price</label>
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-gray-600 mb-1">Max price</label>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Rooms and beds</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Bedrooms</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="p-2 border rounded-full hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>{rooms}</span>
                  <button
                    onClick={() => setRooms(rooms + 1)}
                    className="p-2 border rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span>Bathrooms</span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="p-2 border rounded-full hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>{bathrooms}</span>
                  <button
                    onClick={() => setBathrooms(bathrooms + 1)}
                    className="p-2 border rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
          <button
            onClick={handleApply}
            className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
          >
            Show results
          </button>
        </div>
      </div>
    </div>
  );
}