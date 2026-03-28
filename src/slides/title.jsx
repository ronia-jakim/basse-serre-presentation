import 'katex/dist/katex.min.css'
import { useEffect } from 'react'

import Content from '../../data/slides/test.mdx'

export const Title = ({ hasPrevious=true, hasNext=true }) => {

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
