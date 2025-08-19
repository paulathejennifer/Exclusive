import { render, screen } from '@testing-library/react';
import AuthSideImage from '../../shared-components/AuthSideImage';

describe('AuthSideImage', () => {
  test('renders image component', () => {
    render(<AuthSideImage />);
    const image = screen.getByAltText('Cart');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/auth-side.png');
  });
});