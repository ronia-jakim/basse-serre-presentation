import { useEffect, useRef } from 'react'
import { fireConfetti } from './confetti'

export const ConfettiTrigger = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      
      const yRatio = rect.top / window.innerHeight
      const xRatio = rect.left / window.innerWidth

      fireConfetti({ y: yRatio, x: xRatio })
    }
  }, [])

  return <span ref={elementRef} style={{ display: 'inline-block' }} />
}

