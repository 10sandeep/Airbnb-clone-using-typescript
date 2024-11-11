import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-xl overflow-hidden">
        <div className="relative aspect-video md:aspect-square cursor-pointer" onClick={() => setShowModal(true)}>
          <img src={images[0]} alt="Main" className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative aspect-square cursor-pointer" onClick={() => setShowModal(true)}>
              <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                  +{images.length - 5} more
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X size={24} />
          </button>
          <button
            onClick={handlePrev}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
          <img
            src={images[currentImage]}
            alt={`Gallery ${currentImage + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <div className="absolute bottom-4 text-white text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}