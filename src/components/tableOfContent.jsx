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
      padding: '20px',
      boxSizing: 'border-box',
      overflowY: 'auto',
      zIndex: 10,
      cursor: `url(${Duck}), auto` // Standard syntax
    }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .toc-container {
          font-size: 0.9rem;
          text-align: left;
          color: #505050;
        }
        .toc-container ul {
          list-style: none;
          padding-left: 0;
        }
        .toc-container li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 8px;
        }
        .toc-container li::before {
          content: '🦆';
          position: absolute;
          left: 0;
          font-size: 1rem;
        }
        .toc-container * {
          cursor: url(${Duck}), auto !important;
        }
      `}} />

      <div className="toc-container">
        <Content active={active} />
      </div>
    </div>
  );
};
