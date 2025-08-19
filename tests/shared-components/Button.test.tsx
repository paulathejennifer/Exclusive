import { render, screen } from '@testing-library/react';
import Button from '../../shared-components/Button';

describe('Button', () => {
  test('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('bg-[#DB4444]');
  });
});