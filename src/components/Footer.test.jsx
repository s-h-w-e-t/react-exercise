import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("should render Footer component correctly", () => {
    render(<Footer />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
