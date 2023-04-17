import React from 'react';

export const ImageClipPaths: React.FC<ImageClipPathsProps> = ({ id }) => {
  return (
    <svg className="hidden">
      <defs>
        <clipPath id={`${id}-0`}>
          <path d="M0,0H195.193V195.193H0Z" />
        </clipPath>
        <clipPath id={`${id}-1`}>
          <path d="M0,0H195.193V195.193H0Z" />
        </clipPath>
        <clipPath id={`${id}-2`}>
          <path d="M0,0H195.193V195.193H0Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

interface ImageClipPathsProps {
    id: string;
  }