import YouTube from "react-youtube"
import Duck from '../../assets/duck.png'


export const MovieClip = () => {
  const videoId = "zZ7AimPACzc";
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      top: '15px',
      overflow: 'hidden',
      width: '315px',
      height: '560px',  
      zIndex: 10,
      cursor: `url(${Duck}), auto` 
    }}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '0',
          left: '55%',
          width: '177.77vh',
          height: '100%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none' 
        }}
      />
    </div>
  )
}

export const TreeClip = () => {
  const videoId = "mZ1nsU1LAPA";
  
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;

  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      top: '590px',
      overflow: 'hidden',
      width: '315px',
      height: '560px',  
      zIndex: 10,
      cursor: `url(${Duck}), auto` 
    }}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '0',
          left: '55%',
          width: '177.77vh',
          height: '100%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none' 
        }}
      />
    </div>
  )
}

