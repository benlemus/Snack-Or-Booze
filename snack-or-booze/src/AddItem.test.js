import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddItem from "./AddItem";

describe("AddItem component", () => {
  const mockAdd = jest.fn();
  const mockSetAddItem = jest.fn();
  const mockAddItem = {
    category: "snacks",
    id: "",
    name: "",
    serve: "",
    description: "",
    recipe: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the form", () => {
    render(
      <BrowserRouter>
        <AddItem
          add={mockAdd}
          setAddItem={mockSetAddItem}
          addItem={mockAddItem}
        />
      </BrowserRouter>,
    );
    expect(screen.getByPlaceholderText("Item ID")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Item Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Serve")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Recipe")).toBeInTheDocument();
  });

  test("renders category select dropdown", () => {
    render(
      <BrowserRouter>
        <AddItem
          add={mockAdd}
          setAddItem={mockSetAddItem}
          addItem={mockAddItem}
        />
      </BrowserRouter>,
    );
    const select = screen.getByDisplayValue("Snack");
    expect(select).toBeInTheDocument();
    expect(screen.getByText("Snack")).toBeInTheDocument();
    expect(screen.getByText("Drink")).toBeInTheDocument();
  });

  test("renders Add button", () => {
    render(
      <BrowserRouter>
        <AddItem
          add={mockAdd}
          setAddItem={mockSetAddItem}
          addItem={mockAddItem}
        />
      </BrowserRouter>,
    );
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("calls setAddItem when input changes", () => {
    render(
      <BrowserRouter>
        <AddItem
          add={mockAdd}
          setAddItem={mockSetAddItem}
          addItem={mockAddItem}
        />
      </BrowserRouter>,
    );
    const nameInput = screen.getByPlaceholderText("Item Name");
    fireEvent.change(nameInput, {
      target: { value: "New Snack", name: "name" },
    });
    expect(mockSetAddItem).toHaveBeenCalled();
  });

  test("calls add function on form submit", () => {
    render(
      <BrowserRouter>
        <AddItem
          add={mockAdd}
          setAddItem={mockSetAddItem}
          addItem={mockAddItem}
        />
      </BrowserRouter>,
    );
    const form = screen.getByRole("button", { name: /add/i }).closest("form");
    fireEvent.submit(form);
    expect(mockAdd).toHaveBeenCalledWith(mockAddItem);
  });
});
