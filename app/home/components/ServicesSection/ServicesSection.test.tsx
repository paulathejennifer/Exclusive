import React from 'react';
import { render, screen } from '@testing-library/react';
import ServicesSection from './ServicesSection';

describe('ServicesSection Component', () => {
  beforeEach(() => {
    render(<ServicesSection />);
  });

  it('renders all three service icons with aria-label and role img', () => {
    const deliveryIcon = screen.getByRole('img', { name: /free and fast delivery/i });
    const customerServiceIcon = screen.getByRole('img', { name: /customer service/i });
    const moneyBackIcon = screen.getByRole('img', { name: /money back guarantee/i });

    expect(deliveryIcon).toBeInTheDocument();
    expect(customerServiceIcon).toBeInTheDocument();
    expect(moneyBackIcon).toBeInTheDocument();
  });

  it('renders the correct headers and descriptions for each service', () => {
    expect(screen.getByText(/free and fast delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/free delivery for all orders over/i)).toBeInTheDocument();

    expect(screen.getByText(/24\/7 customer service/i)).toBeInTheDocument();
    expect(screen.getByText(/friendly 24\/7 customer support/i)).toBeInTheDocument();

    expect(screen.getByText(/money back guarantee/i)).toBeInTheDocument();
    expect(screen.getByText(/we refund money within 30 days/i)).toBeInTheDocument();
  });

  it('renders exactly three service blocks', () => {
    const serviceBlocks = screen.getAllByRole('heading', { level: 2 });
    expect(serviceBlocks.length).toBe(3);
  });
});
