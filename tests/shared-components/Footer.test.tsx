import { render, screen } from '@testing-library/react';
import Footer from '../../shared-components/Footer';

describe('Footer', () => {
  test('renders footer with all sections', () => {
    render(<Footer />);
    expect(screen.getByText('Exclusive')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Quick Link')).toBeInTheDocument();
    expect(screen.getByText('Download App')).toBeInTheDocument();
  });
});