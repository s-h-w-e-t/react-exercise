import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  it("should render Header component correctly", () => {
    render(<Header />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
