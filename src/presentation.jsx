import { useState, useEffect } from 'react' 
import { useSearchParams } from 'react-router-dom';

import { Slide } from './slides/title'

const modules = import.meta.glob('../data/slides/*.mdx', { eager: true });
const sortedKeys = Object.keys(modules).sort();
const slides = [];
const isTitle = [];
const active = [];
sortedKeys.forEach((key) => {
  const fileName = key.split('/').pop().replace('.mdx', '');
  
  const [index, titleStatus, activeValue] = fileName.split('_');

  slides.push(modules[key].default);
  isTitle.push(titleStatus === 'true');
  active.push(activeValue === 'none' ? "" : activeValue);
});

export const Slides = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getInitialIndex = () => {
    const s = parseInt(searchParams.get('slide'), 10);
    return !isNaN(s) && s >= 0 && s < slides.length ? s : 0;
  };
  const [currentSlide, setCurrentSlide] = useState(getInitialIndex()) 

  const next = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1)
  }
  const prev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key == "e" || event.key == " " || event.key == "ArrowRight") next()
      else if (event.key == "q" || event.key == "ArrowLeft") prev()
    }
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown) 
    }
  }, [currentSlide])

  useEffect(() => {
    setSearchParams({ slide: currentSlide }, { replace: true });
  }, [currentSlide, setSearchParams]);

  const activeSlide = slides[currentSlide] 
  
  return ( 
    <Slide 
      hasPrevious={currentSlide > 0} 
      onPrev={prev}
      hasNext={currentSlide < slides.length - 1} 
      onNext={next}
      active={active[currentSlide]}
      SlideContent={activeSlide}
      isTitle={isTitle[currentSlide]}
    />
  )
}
