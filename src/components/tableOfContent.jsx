import Content from '../../data/tableOfContent.mdx'
import Duck from '../../assets/duck.png'

export const TableOfContents = ({ active="" }) => {
  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: 'calc((100vw - 1126px) / 2)', 
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'left',
      alignItems: 'left',
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      zIndex: 10,
      cursor: `url(${Duck}, auto)`
    }}>
      <div style={{ 
        fontSize: '0.9rem', 
        textAlign: 'left', 
        color: '#505050' 
      }} className="toc-container">
        <Content active={active} />
      </div>

      <style>{`
        .toc-container ul {
          list-style: none; /* Remove default dots */
          padding-left: 0;
        }
        .toc-container li {
          position: relative;
          padding-left: 25px; /* Space for the duck */
          margin-bottom: 8px;
        }
        .toc-container li::before {
          content: '🦆';    /* The Duck! */
          position: absolute;
          left: 0;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};
