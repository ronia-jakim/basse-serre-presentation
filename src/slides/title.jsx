import 'katex/dist/katex.min.css'
import { useEffect } from 'react'

import { fireSideDucks } from '../components/confetti'

import Content from '../../data/slides/title.mdx'

export const Title = ({ hasPrevious=true, hasNext=true }) => {

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
      <main>
        <Content />
      </main>
    </div>
  )
}
