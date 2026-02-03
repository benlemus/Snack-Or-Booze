import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
  test("renders welcome message", () => {
    render(<Home snacks={[]} drinks={[]} />);
    expect(
      screen.getByText(/Welcome to Silicon Valley's premier dive cafe!/i),
    ).toBeInTheDocument();
  });

  test("displays correct snack count", () => {
    const snacks = [
      { id: "nachos", name: "Nachos" },
      { id: "hummus", name: "Hummus" },
    ];
    render(<Home snacks={snacks} drinks={[]} />);
    expect(screen.getByText("Snacks(2)")).toBeInTheDocument();
  });

  test("displays correct drink count", () => {
    const drinks = [
      { id: "martini", name: "Martini" },
      { id: "negroni", name: "Negroni" },
      { id: "gin-and-tonic", name: "Gin and Tonic" },
    ];
    render(<Home snacks={[]} drinks={drinks} />);
    expect(screen.getByText("Drinks(3)")).toBeInTheDocument();
  });

  test("displays both snack and drink counts", () => {
    const snacks = [{ id: "nachos", name: "Nachos" }];
    const drinks = [{ id: "martini", name: "Martini" }];
    render(<Home snacks={snacks} drinks={drinks} />);
    expect(screen.getByText("Snacks(1)")).toBeInTheDocument();
    expect(screen.getByText("Drinks(1)")).toBeInTheDocument();
  });
});
