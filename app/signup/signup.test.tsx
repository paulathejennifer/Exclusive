import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignupPage from "./page"; 

describe("SignupPage Component", () => {
  beforeEach(() => {
    render(<SignupPage />);
  });

  it("renders main headings and instructions", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: /create an account/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/enter your details to get started with exclusive/i)
    ).toBeInTheDocument();
  });

  it("renders form inputs with accessible labels", () => {
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email or phone number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const createAccountButton = screen.getByRole("button", {
      name: /create account/i,
    });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(createAccountButton).toBeInTheDocument();
  });

  it("renders Log in link", () => {
    const loginLink = screen.getByRole("link", { name: /log in/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  it("allows user to type and submit the form", async () => {
    const user = userEvent.setup();

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email or phone number/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const createAccountButton = screen.getByRole("button", {
      name: /create account/i,
    });

    await user.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");

    await user.type(emailInput, "john@example.com");
    expect(emailInput).toHaveValue("john@example.com");

    await user.type(passwordInput, "mypassword");
    expect(passwordInput).toHaveValue("mypassword");

    await user.click(createAccountButton);

  });
});
