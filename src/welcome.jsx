import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { fireSideCannons } from './components/confetti'

import WelcomePage from '../data/welcome.mdx'

export const Welcome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    fireSideCannons()
  }, [])

  return (
    <div style={{ 
        padding: '20px',
        paddingBottom: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontFamily: 'sans-serif',
        height: '100%'
    }}>
      <main>
        <WelcomePage />
        <br />
        <br />
        <button onClick={() => navigate('/slides')} style={{ fontSize: '40px', }} >
          Proceed!
        </button>
      </main>
    </div>
  )
}
