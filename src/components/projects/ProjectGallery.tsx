
import React, { useState } from 'react';
import { X } from 'lucide-react';

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectGalleryProps = {
  images: ProjectImage[];
};

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);

  const openModal = (image: ProjectImage) => {
    setActiveImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openModal(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeModal}
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.src} 
              alt={activeImage.alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
