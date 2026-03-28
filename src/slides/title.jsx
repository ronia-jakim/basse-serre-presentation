import 'katex/dist/katex.min.css'
import { useEffect } from 'react'

import { fireSideDucks } from '../components/confetti'
import { TableOfContents } from '../components/tableOfContent'
import { PreviousButton, NextButton } from '../components/slideButtons'

export const Slide = ({ hasPrevious=true, onPrev, hasNext=true, onNext, active="", SlideContent }) => {

  useEffect(() => {
    fireSideDucks()
  }, [])

  return (
    <div style={{ 
        padding: '20px',
        paddingBottom: '30vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontFamily: 'sans-serif',
        height: '100%'
    }}>

    <TableOfContents active={active}/>
      <main>
        <SlideContent />
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
