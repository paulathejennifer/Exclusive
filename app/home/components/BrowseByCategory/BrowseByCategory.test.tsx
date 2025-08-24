import React from "react";
import { render, screen } from "@testing-library/react";
import BrowseByCategory from "./BrowseByCategory";

describe("BrowseByCategory Component", () => {
  beforeEach(() => {
    render(<BrowseByCategory />);
  });

  it("renders the categories label and heading", () => {
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Browse By Category/i })).toBeInTheDocument();
  });

  it("renders navigation buttons with correct aria-labels", () => {
    expect(screen.getByRole("button", { name: /Previous/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Next/i })).toBeInTheDocument();
  });

  it("renders one button per category with correct names and icons", () => {
    const categoryButtons = screen.getAllByRole("button", { name: /^Browse/i });
    expect(categoryButtons.length).toBe(6); 
    expect(screen.getByRole("button", { name: /Browse Phones/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Browse Camera/i })).toBeInTheDocument();
  });

  it("highlights the active category button with correct styles", () => {
    const activeBtn = screen.getByRole("button", { name: /Browse Camera/i });
    expect(activeBtn).toHaveClass("bg-red-600");
    expect(activeBtn).toHaveClass("text-white");
  });
});
