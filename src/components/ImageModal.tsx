import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    src: string;
    alt: string;
    title: string;
    description?: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    title: string;
    description?: string;
  }>;
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

const ImageModal = ({ isOpen, onClose, image, images, currentIndex, onNavigate }: ImageModalProps) => {
  const handlePrevious = () => {
    if (images && currentIndex !== undefined && onNavigate && currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (images && currentIndex !== undefined && onNavigate && currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  };

  const showNavigation = images && images.length > 1 && currentIndex !== undefined && onNavigate;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-background border-0 rounded-full">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Navigation buttons */}
          {showNavigation && (
            <>
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold">
              {image.title}
            </h3>
            {image.description && (
              <p className="text-white/90 text-sm mt-2">
                {image.description}
              </p>
            )}
            {showNavigation && (
              <p className="text-white/70 text-sm mt-2">
                {currentIndex + 1} of {images.length}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;