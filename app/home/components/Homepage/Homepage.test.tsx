import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('Homepage Component', () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  it('renders promo banner with ShopNow link', () => {
    expect(screen.getByText(/Summer Sale For All Swim Suits/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ShopNow/i })).toBeInTheDocument();
  });

  it('renders navbar links', () => {
    ['Home', 'Contact', 'About', 'Sign Up'].forEach(text => {
      expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
    });
  });

  it('renders sidebar categories with and without arrows', () => {
    const withArrow = ["Woman's Fashion", "Men's Fashion"];
    const withoutArrow = [
      "Electronics", "Home & Lifestyle", "Medicine",
      "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"
    ];

    withArrow.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(label).querySelector('svg')).toBeInTheDocument();
    });

    withoutArrow.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
      expect(screen.getByText(label).querySelector('svg')).toBeNull();
    });
  });

  it('renders slideshow heading and image', () => {
    expect(screen.getByText(/iPhone 14 Series/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Up to 10% off Voucher/i })).toBeInTheDocument();

    const img = screen.getByAltText('iPhone 14 Series');
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass('object-contain');
  });
});
