import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './page';
describe('LoginPage Component', () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  it('renders main headings and instructions', () => {
    expect(screen.getByRole('heading', { level: 2, name: /log in to exclusive/i })).toBeInTheDocument();
    expect(screen.getByText(/enter your details below to access your account/i)).toBeInTheDocument();
  });

  it('renders form inputs with accessible labels', () => {

    const emailInput = screen.getByLabelText(/email or phone number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /log in/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('renders Sign Up link (allow multiple)', () => {
    const signUpLinks = screen.getAllByRole('link', { name: /sign up/i });
    expect(signUpLinks.length).toBeGreaterThanOrEqual(1);
    const hasCorrectHref = signUpLinks.some(link => link.getAttribute('href') === '/signup');
    expect(hasCorrectHref).toBe(true);
  });

  it('allows user to type and submit form', async () => {
    const user = userEvent.setup();

    const emailInput = screen.getByLabelText(/email or phone number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /log in/i });

    await user.type(emailInput, 'user@example.com');
    expect(emailInput).toHaveValue('user@example.com');

    await user.type(passwordInput, 'mypassword');
    expect(passwordInput).toHaveValue('mypassword');

    await user.click(loginButton);


  });
});
