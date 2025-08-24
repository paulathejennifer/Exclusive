import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className, fill, priority, ...rest }) => {
    const imgSrc = typeof src === 'string' ? src : src?.src || '';
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={imgSrc} alt={alt} className={className} {...rest} />;
  },
}));
