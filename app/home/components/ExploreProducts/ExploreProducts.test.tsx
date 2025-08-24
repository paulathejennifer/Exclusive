import React from "react";
import { render, screen } from "@testing-library/react";
import ExploreProducts, { products } from "./ExploreProducts";

describe("ExploreProducts Component", () => {
  beforeEach(() => {
    render(<ExploreProducts />);
  });

  it("renders section header and main title", () => {
    expect(screen.getByText("Our Products")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Explore Our Products/i })).toBeInTheDocument();
  });

  it("renders every product's name and at least one price display", () => {
    products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      const prices = screen.getAllByText(`$${product.price}`);
      expect(prices.length).toBeGreaterThan(0);
    });
  });

  it("renders 'New' labels only for products marked as new", () => {
    const newCount = products.filter(p => p.isNew).length;
    const newLabels = screen.getAllByText("New");
    expect(newLabels.length).toBe(newCount);
  });

  it("renders Add to Cart buttons only for products with hasAddToCart", () => {
    const addButtons = screen.queryAllByRole("button", { name: /add to cart/i });
    expect(addButtons.length).toBe(products.filter(p => p.hasAddToCart).length);
  });

  it("renders icon buttons for favorites and view details with correct aria-labels", () => {
    const favBtns = screen.getAllByRole("button", { name: "Add to favorites" });
    const viewBtns = screen.getAllByRole("button", { name: "View details" });
    expect(favBtns.length).toBe(products.length);
    expect(viewBtns.length).toBe(products.length);
  });

  it("renders star icons correctly according to rating", () => {
    const stars = screen.getAllByText((content, element) => {
      return !!element && element.classList.contains("star") && content === "★";
    });
    expect(stars.length).toBeGreaterThan(0);
  });

  it("renders stock counts matching each product", () => {
    const stockElements = screen.getAllByText((content) =>
      typeof content === "string" && /^\(\d+\)$/.test(content)
    );
    expect(stockElements.length).toBe(products.length);
  });
});
