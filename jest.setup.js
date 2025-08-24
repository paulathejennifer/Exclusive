import '@testing-library/jest-dom';
import React from 'react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className, ...props }) => {

    const { fill, priority, ...rest } = props;
    const imgSrc = typeof src === 'string' ? src : src?.src || '';

    return <img src={imgSrc} alt={alt} className={className} {...rest} />;
  },
}));
