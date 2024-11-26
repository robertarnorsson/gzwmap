import { useState, useEffect } from 'react';

interface PopupImageProps {
  src: string;
  alt: string;
}

const PopupImage = ({ src, alt }: PopupImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isCached, setIsCached] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    if (img.complete) {
      setIsCached(true);
      setIsLoaded(true);
    } else {
      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src]);

  return (
    <div className="relative w-64 aspect-video overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background bg-opacity-50">
          <span className="text-sm text-primary/80">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded && !isCached ? 'opacity-100' : ''}`}
      />
    </div>
  );
};

export default PopupImage;
