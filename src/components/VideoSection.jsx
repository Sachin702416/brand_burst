import React from 'react';
import { Box } from '@mui/material';

const VideoSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/videoBg.mp4" type="video/mp4" /> {/* Use public path */}
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoSection;
