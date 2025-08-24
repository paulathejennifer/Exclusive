import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import FlashSales from "./FlashSales";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe("FlashSales Component", () => {
  beforeEach(() => {
    render(<FlashSales />);
  });

  it("renders header and initial countdown timer correctly", () => {
    expect(screen.getByText("Today's")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Flash Sales/i })).toBeInTheDocument();

    expect(screen.getByText("02")).toBeInTheDocument(); 
    expect(screen.getByText("15")).toBeInTheDocument(); 
    expect(screen.getByText("30")).toBeInTheDocument(); 
    expect(screen.getByText("00")).toBeInTheDocument(); 
  });

  it("updates countdown timer seconds after 1 second", () => {
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("59")).toBeInTheDocument();
  });

  it("renders 4 visible products initially", () => {
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBe(4);

    const discountLabels = screen.getAllByText(/-\d+%/);
    expect(discountLabels.length).toBe(4);
  });

  it("renders product names and prices correctly", () => {
    const firstProduct = screen.getByText("HAVIT HV-G92 Gamepad");
    expect(firstProduct).toBeInTheDocument();

    expect(screen.getByText("$120")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();

    const reviews = screen.getAllByText(/\(\d+\)/);
    expect(reviews.length).toBeGreaterThan(0);
  });

  it("navigates to next slide on Next button click", () => {
    const nextButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(nextButton);


    const firstProductName = screen.getAllByRole("heading", { level: 3 })[0];
    expect(firstProductName).toHaveTextContent("AK-900 Wired Keyboard");
  });

  it("navigates to previous slide on Previous button click", () => {
    const prevButton = screen.getByRole("button", { name: /Previous/i });
    fireEvent.click(prevButton);


    const firstProductName = screen.getAllByRole("heading", { level: 3 })[0];
    expect(firstProductName).toHaveTextContent("AK-900 Wired Keyboard");
  });

  it("renders accessible icon buttons with aria-labels", () => {
    const favButtons = screen.getAllByRole("button", { name: "Add to favorites" });
    const viewButtons = screen.getAllByRole("button", { name: "View details" });
    expect(favButtons.length).toBeGreaterThan(0);
    expect(viewButtons.length).toBeGreaterThan(0);
  });

  it("renders View All Products button", () => {
    const button = screen.getByRole("button", { name: /View All Products/i });
    expect(button).toBeInTheDocument();
  });
});
