export const Theorem = ({ title, children }) => {
  // Neutral, high-contrast styles for a "standard" box
  const style = {
    border: '#5F9C3F',
    bg: 'rgba(123, 182, 98, 0.05)',
    accent: '#F5BD1E'
  };

  return (
    <div style={{
      margin: '1.5rem 0',
      padding: '1.2rem',
      borderRadius: '0px',
      backgroundColor: style.bg,
      borderLeft: `2px solid ${style.border}`, 
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      {title && (
        <div style={{ 
          fontWeight: 'bold',
          textAlign: 'left',
          width: '100%',
          marginBottom: '0.8rem',
          color: style.border,
          fontSize: '1.1rem',
          paddingBottom: '0.3rem',
          display: 'inline-block'
        }}>
          {title}
        </div>
      )}
      <div style={{ 
        lineHeight: '1.6',
        color: '#222'
      }}>
        <style dangerouslySetInnerHTML={{ __html: `
          strong {
            color: #7BB662;
          }
        ` }} />
        {children}
      </div>
    </div>
  );
};
