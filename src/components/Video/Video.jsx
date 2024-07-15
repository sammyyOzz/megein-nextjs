import React from 'react'
import megeinVideo from '../../assets/videos/megein.mp4'

function Video() {
  return (
    <video 
      src={megeinVideo} 
      type="video/mp4" 
      controls
      muted 
      loop 
      style={{ 
        width: '100%',
        height: 'auto'
      }}
    />
  )
}

export default Video