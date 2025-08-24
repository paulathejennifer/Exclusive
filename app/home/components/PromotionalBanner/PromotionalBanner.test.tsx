import React from 'react';
import { render, screen } from '@testing-library/react';
import PromotionalBanner from './PromotionalBanner';

describe('PromotionalBanner', () => {
  it('renders category label', () => {
    render(<PromotionalBanner />);
    expect(screen.getByText(/Categories/i)).toBeInTheDocument();
  });

  it('renders countdown numbers', () => {
    render(<PromotionalBanner />);
    expect(screen.getByText('23')).toBeInTheDocument();
    expect(screen.getByText('05')).toBeInTheDocument();
    expect(screen.getByText('59')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();
  });

  it('renders Buy Now button', () => {
    render(<PromotionalBanner />);
    expect(screen.getByRole('link', { name: /Buy Now!/i })).toBeInTheDocument();
  });

  it('renders the JBL speaker image', () => {
    render(<PromotionalBanner />);
    const image = screen.getByAltText(/JBL Speaker/i);
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('/images/jbl-speaker.png');
  });
});
