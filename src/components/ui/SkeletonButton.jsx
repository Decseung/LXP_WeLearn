import React from 'react';

const SkeletonButton = ({ className = '' }) => {
  return (
    <span
      aria-hidden="true"
      className={['inline-block animate-pulse rounded bg-gray-200', className].join(' ')}
    />
  );
};

export default SkeletonButton;
