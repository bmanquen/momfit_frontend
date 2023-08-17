import Home from "./page";
import React from "react";
import { render, screen } from "../utils/test-utils";

describe("Home Page, ", () => {
  it("renders", () => {
    render(<Home />);

    // Hero Image
    expect(
      screen.getByRole("heading", { name: /brooke's business/i })
    ).toBeVisible();

    // Services
    expect(screen.getByRole("heading", { name: /services/i })).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /pre-pregnancy/i })
    ).toBeVisible();
    expect(
      screen.getByRole("heading", { name: /post-pregnancy/i })
    ).toBeVisible();
    expect(screen.getByRole("heading", { name: /^pregnancy$/i })).toBeVisible();
    expect(screen.getByText(/we offer pre-pregnancy services/i)).toBeVisible();
    expect(screen.getByText(/we offer post-pregnancy services/i)).toBeVisible();
    expect(screen.getByText(/we offer pregnancy services/i)).toBeVisible();

    // About
    expect(screen.getByRole("heading", { name: /about us/i })).toBeVisible();
    expect(
      screen.getByText(
        /we specialize in pelvic floor corrective training to either help you prepare for pregnancy or to help you after pregnancy/i
      )
    ).toBeVisible();
  });
});
