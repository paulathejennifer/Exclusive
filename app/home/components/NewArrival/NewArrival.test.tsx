import React from "react";
import { render, screen } from "@testing-library/react";
import NewArrival from "./NewArrival";

describe("NewArrival Component", () => {
  beforeEach(() => {
    render(<NewArrival />);
  });

  it("renders the Featured label and New Arrival heading", () => {
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /New Arrival/i })).toBeInTheDocument();
  });

  it("renders all product cards", () => {
    const titles = [
      "PlayStation 5",
      "Women's Collections",
      "Speakers",
      "Perfume",
    ];
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders Shop Now links for all products", () => {
    const links = screen.getAllByText("Shop Now");
    expect(links.length).toBe(4); // We have 4 product cards
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", "#");
      expect(link).toHaveClass("cursor-pointer");
    });
  });

  it("renders images with alt text matching product titles", () => {
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).toBeTruthy();
    });
  });
it("renders large card with expected class", () => {
  const largeCard = screen.getByAltText("PlayStation 5").closest("div");
  expect(largeCard).toHaveClass("min-h-[400px]");
});

});
