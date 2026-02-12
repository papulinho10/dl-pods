import React, { useState, useEffect, useRef } from 'react';
import { BANNERS } from '../constants';

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  // Auto-play logic (pauses if dragging)
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

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
    
    // Disable transition during drag for instant follow
    if (containerRef.current) {
      containerRef.current.style.transition = 'none';
    }
  };

  const touchMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const diff = currentPosition - startX;
      // Calculate movement just for the visual drag effect
      const move = diff; 
      
      // Apply transform manually for performance
      if (containerRef.current) {
        const offset = -currentIndex * 100;
        // We use % for index, but pixels for drag. We need to convert pixel diff to approx percentage for the container style
        // Or simpler: Use a calculated transform in the render, but here we update state
        // Let's stick to updating a ref or state for the render loop if we want 60fps, 
        // but React state is fine for this complexity.
      }
      setCurrentTranslate(move);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate;
    
    // Threshold to change slide (100px)
    if (movedBy < -100) {
      nextSlide();
    } else if (movedBy > 100) {
      prevSlide();
    }

    // Reset drag offset
    setCurrentTranslate(0);
    
    // Re-enable transition
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.5s ease-out';
    }
  };

  return (
    // mt-16 (mobile navbar height) md:mt-20 (desktop navbar height) - FIXES THE GAP
    <div className="relative w-full h-[55vh] md:h-[85vh] overflow-hidden bg-street-black mt-16 md:mt-20 border-b border-white/10 select-none">
      
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
            className="min-w-full h-full relative group"
          >
            {/* Image with Grayscale Hover Effect */}
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[2000ms] ease-in-out pointer-events-none"
              draggable={false}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />

            {/* Text Content (Optional - if you want it to appear on hover or always) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                {/* Keeping it clean as requested, but structure is here if needed */}
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 pointer-events-none">
        {BANNERS.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
              index === currentIndex ? 'bg-yellow-400 w-8' : 'bg-white/50 w-4'
            }`}
          />
        ))}
      </div>
      
      {/* Drag Hint (Optional) */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 opacity-0 md:opacity-50 pointer-events-none">
         <p className="text-[10px] text-white uppercase tracking-widest animate-pulse">Arraste para navegar</p>
      </div>

    </div>
  );
};

export default HeroCarousel;