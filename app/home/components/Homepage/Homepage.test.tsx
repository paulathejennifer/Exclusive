import React from "react";
import { render, screen } from "@testing-library/react";
import Homepage from "./Homepage";


describe("Homepage Component", () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  it("renders promo banner with correct texts and ShopNow link", () => {
    expect(screen.getByText(/Summer Sale For All Swim Suits/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ShopNow/i })).toBeInTheDocument();
  });

  it("renders navbar brand and navigation links", () => {
    expect(screen.getByText("Exclusive")).toBeInTheDocument();

    const navLinks = ["Home", "Contact", "About", "Sign Up"];
    navLinks.forEach((text) => {
      const link = screen.getByRole("link", { name: text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveClass("text-black");
    });

    expect(screen.getByPlaceholderText(/what are you looking for/i)).toBeInTheDocument();

    expect(screen.getByLabelText("Favorites")).toBeInTheDocument();
    expect(screen.getByLabelText("Cart")).toBeInTheDocument();
  });

  it("renders sidebar categories with correct labels and arrows", () => {
    const categoriesWithArrow = ["Woman's Fashion", "Men's Fashion"];
    const categoriesWithoutArrow = [
      "Electronics",
      "Home & Lifestyle",
      "Medicine",
      "Sports & Outdoor",
      "Baby's & Toys",
      "Groceries & Pets",
      "Health & Beauty",
    ];

    categoriesWithArrow.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();

      const labelDiv = screen.getByText(label);
      expect(labelDiv.querySelector("svg")).toBeInTheDocument();
    });

    categoriesWithoutArrow.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();

      const labelDiv = screen.getByText(label);
      expect(labelDiv.querySelector("svg")).not.toBeInTheDocument();
    });
  });

});
