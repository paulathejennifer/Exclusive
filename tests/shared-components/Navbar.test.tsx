import { render, screen } from '@testing-library/react';
import Navbar from '../../shared-components/Navbar';

describe('Navbar', () => {
  test('renders navbar with all links', () => {
    render(<Navbar />);
    expect(screen.getByText('Exclusive')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });
});