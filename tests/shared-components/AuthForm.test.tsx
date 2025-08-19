import { render, screen } from '@testing-library/react';
import AuthForm from '../../shared-components/AuthForm';

describe('AuthForm', () => {
  test('renders login form correctly', () => {
    render(<AuthForm type="login" />);
    expect(screen.getByPlaceholderText('Email or Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log In/i })).toBeInTheDocument();
    expect(screen.getByText('Forget Password?')).toBeInTheDocument();
  });

  test('renders signup form correctly', () => {
    render(<AuthForm type="signup" />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email or Phone Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create Account/i })).toBeInTheDocument();
  });
});