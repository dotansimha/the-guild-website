import React from 'react';

export const Image: React.FC<{
  alt: string;
  src: string;
  className?: string;
}> = ({ alt, src, className }) => {
  const isVideo = src.endsWith('.webm') || src.endsWith('.mp4');

  if (isVideo) {
    const webm: string = src.endsWith('.webm')
      ? src
      : src.replace('.mp4', '.webm');
    const mp4: string = src.endsWith('.mp4')
      ? src
      : src.replace('.webm', '.mp4');

    return (
      <video
        className={className}
        playsInline={true}
        autoPlay={true}
        loop={true}
        muted={true}
      >
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    );
  }

  return <img className={className} src={src} alt={alt} />;
};
