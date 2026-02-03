import { render, screen } from "@testing-library/react";
import Handle404 from "./Handle404";

describe("Handle404 component", () => {
  test("renders 404 error message", () => {
    render(<Handle404 />);
    expect(
      screen.getByText("This is not the page you are looking for"),
    ).toBeInTheDocument();
  });

  test("renders heading with correct styling", () => {
    render(<Handle404 />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveStyle({ color: "black" });
  });
});
