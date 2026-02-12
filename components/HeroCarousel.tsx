import React, { useState, useEffect, useRef } from 'react';
import { BANNERS } from '../constants';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Auto-play logic (pauses if dragging)
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Slightly slower to allow pulse to finish a cycle

    return () => clearInterval(timer);
  }, [currentIndex, isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  };

  // --- DRAG / SWIPE LOGIC ---

  const getPositionX = (event: React.MouseEvent | React.TouchEvent) => {
    return 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
  };

  const touchStart = (index: number) => (event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const pos = getPositionX(event);
    setStartX(pos);
    
    if (containerRef.current) {
      containerRef.current.style.transition = 'none';
    }
  };

  const touchMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const diff = currentPosition - startX;
      setCurrentTranslate(diff);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate;
    
    if (movedBy < -100) {
      nextSlide();
    } else if (movedBy > 100) {
      prevSlide();
    }

    setCurrentTranslate(0);
    
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.5s ease-out';
    }
  };

  return (
    <div 
        ref={wrapperRef}
        className="relative w-full h-[55vh] md:h-[85vh] overflow-hidden bg-street-black mt-16 md:mt-20 border-b border-white/10 select-none"
    >
      
      {/* Slider Track */}
      <div 
        ref={containerRef}
        className="flex w-full h-full"
        style={{ 
          transform: `translateX(calc(-${currentIndex * 100}% + ${currentTranslate}px))`,
          transition: isDragging ? 'none' : 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={touchStart(currentIndex)}
        onMouseMove={touchMove}
        onMouseUp={touchEnd}
        onMouseLeave={() => { if(isDragging) touchEnd() }}
        onTouchStart={touchStart(currentIndex)}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className="min-w-full h-full relative group overflow-hidden"
          >
            {/* Image - Pulsing Effect on Active Slide */}
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover object-center pointer-events-none"
              style={{
                // If it's the active slide, apply the pulse loop. Otherwise, stay B&W.
                animation: index === currentIndex ? 'global-street-pulse 6s infinite ease-in-out' : 'none',
                filter: index === currentIndex ? undefined : 'grayscale(100%) brightness(0.5)'
              }}
              draggable={false}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 pointer-events-none">
        {BANNERS.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              index === currentIndex ? 'bg-yellow-400 w-8 animate-neon-border' : 'bg-white/50 w-4'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;