import React from "react";
import { render, screen } from "@testing-library/react";
import BestSellingProducts from "./BestSellingProducts";

describe("BestSellingProducts Component", () => {
  beforeEach(() => {
    render(<BestSellingProducts />);
  });

  it("renders header label and title", () => {
    expect(screen.getByText("This Month")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Best Selling Products/i })).toBeInTheDocument();
  });

  it("renders the View All button", () => {
    expect(screen.getByRole("button", { name: /View All/i })).toBeInTheDocument();
  });

  it("renders all products with correct names and prices", () => {
    const names = ["The north coat", "Gucci duffle bag", "RGB liquid CPU Cooler", "Small BookSelf"];
    names.forEach(name => expect(screen.getByText(name)).toBeInTheDocument());

    const all360s = screen.getAllByText("$360");
    expect(all360s.length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText("$260")).toBeInTheDocument(); 
    expect(screen.getByText("$960")).toBeInTheDocument();
  });

  it("renders star icons as svg", () => {
    const svgs = screen.getAllByRole('img', { hidden: true });
    expect(svgs.length).toBeGreaterThan(0);
  });
});
