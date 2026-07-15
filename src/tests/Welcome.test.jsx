import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Welcome from "../pages/Welcome";

describe("Welcome Page", () => {

  it("should display Welcome title", () => {

    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );

    expect(
      screen.getByText("Welcome to PopX")
    ).toBeInTheDocument();

  });

});