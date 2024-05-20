import React from 'react';

interface VideoProps {
  src: string;
}

const Video = ({ src }: VideoProps) => {
  return (
    <video controls width="600">
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
