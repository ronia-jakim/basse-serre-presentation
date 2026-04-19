import { useState } from 'react';

export const Theorem = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const style = {
    border: '#5F9C3F',
    bg: 'rgba(123, 182, 98, 0.05)',
    accent: '#F5BD1E'
  };

  return (
    <div style={{
      margin: '1.5rem 0',
      padding: '1.2rem',
      backgroundColor: style.bg,
      borderLeft: `2px solid ${style.border}`, 
      width: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer'
    }}
    onClick={() => setIsOpen(!isOpen)}
    >
      {title && (
        <div style={{ 
          fontWeight: 'bold',
          width: '100%',
          color: style.border,
          fontSize: '1.1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{title}</span>
          <span style={{ 
            fontSize: '0.8rem', 
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
          }}>
            ▼
          </span>
        </div>
      )}
      
      {isOpen && (
        <div style={{ 
          lineHeight: '1.6',
          color: '#222',
          marginTop: '0.8rem'
        }}>
          {children}
        </div>
      )}
    </div>
  );
};
