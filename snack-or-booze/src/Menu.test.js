import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

describe("Menu component", () => {
  const mockItems = [
    { id: "nachos", name: "Nachos" },
    { id: "hummus", name: "Hummus" },
    { id: "salad", name: "Arugula Salad" },
  ];

  test("renders menu title", () => {
    render(
      <BrowserRouter>
        <Menu items={mockItems} title="Snacks" category="snacks" />
      </BrowserRouter>,
    );
    expect(screen.getByText("Snacks Menu")).toBeInTheDocument();
  });

  test("renders all menu items", () => {
    render(
      <BrowserRouter>
        <Menu items={mockItems} title="Snacks" category="snacks" />
      </BrowserRouter>,
    );
    expect(screen.getByText("Nachos")).toBeInTheDocument();
    expect(screen.getByText("Hummus")).toBeInTheDocument();
    expect(screen.getByText("Arugula Salad")).toBeInTheDocument();
  });

  test("renders correct number of items", () => {
    render(
      <BrowserRouter>
        <Menu items={mockItems} title="Snacks" category="snacks" />
      </BrowserRouter>,
    );
    const items = screen.getAllByRole("link");
    expect(items).toHaveLength(3);
  });

  test("renders links with correct href", () => {
    render(
      <BrowserRouter>
        <Menu items={mockItems} title="Snacks" category="snacks" />
      </BrowserRouter>,
    );
    const nachosLink = screen.getByText("Nachos").closest("a");
    expect(nachosLink).toHaveAttribute("href", "/snacks/nachos");
  });

  test("renders empty menu when no items provided", () => {
    render(
      <BrowserRouter>
        <Menu items={[]} title="Snacks" category="snacks" />
      </BrowserRouter>,
    );
    expect(screen.getByText("Snacks Menu")).toBeInTheDocument();
    const items = screen.queryAllByRole("link");
    expect(items).toHaveLength(0);
  });
});
