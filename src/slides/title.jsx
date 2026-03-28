import 'katex/dist/katex.min.css'
import { useEffect } from 'react'

import { fireSideDucks } from '../components/confetti'
import { TableOfContents } from '../components/tableOfContent'
import { PreviousButton, NextButton } from '../components/slideButtons'
import { Theorem } from '../components/theoremBox'
import { ConfettiTrigger } from '../components/confettiTreigger'

export const Slide = ({ hasPrevious=true, onPrev, hasNext=true, onNext, active="", SlideContent, isTitle }) => {

  useEffect(() => {
    fireSideDucks()
  }, [])

  return (
    <div style={{ 
        padding: '20px',
        paddingBottom: isTitle ? '50px' : '10px',
        paddingTop: isTitle ? '0px' : '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isTitle ? 'center' : 'flex-start',
        alignItems: 'center',
        flex: 1,
        fontFamily: 'sans-serif',
        height: '100%'
    }}>

    <TableOfContents active={active}/>
      <main style={{ 
        textAlign: isTitle ? 'center' : 'left', 
        alignItems: isTitle ? 'center' : 'left', 
        justifyContent: isTitle ? 'center' : 'left', 
        width: '100%' 
      }}>
        <SlideContent components={{ Theorem, ConfettiTrigger }} />
      </main>
      <div style={{
        position: 'fixed',
        bottom: '20px',    // Distance from the bottom edge
        left: '50%',
        transform: 'translateX(-50%)', // Centers the container
        width: '1126px',   // Matches your root width
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: 100
      }}>
        { hasPrevious ? <PreviousButton onPrev={onPrev} /> : <div /> }
        { hasNext ? <NextButton onNext={onNext} /> : <div /> }
      </div>
    </div>
  )
}
