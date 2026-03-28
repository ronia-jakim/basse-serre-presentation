import { useState } from 'react' 
import { useEffect} from 'react'

import { Slide } from './slides/title'

import MainTitle from '../data/slides/title.mdx'
import TreeTitle from '../data/slides/treeIsometriesTitle.mdx'

const slides = [ MainTitle, TreeTitle ]
const active = [ "", "minsets" ]

export const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0) 

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

  const activeSlide = slides[currentSlide] 
  
  return ( 
    <Slide 
      hasPrevious={currentSlide > 0} 
      onPrev={prev}
      hasNext={currentSlide < slides.length - 1} 
      onNext={next}
      active={active[currentSlide]}
      SlideContent={activeSlide} 
    />
  )
}
