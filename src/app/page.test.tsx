import Home from "./page";
import React from "react";
import { render, screen } from "../utils/test-utils";
import * as rdd from "react-device-detect";

describe("Home Page, ", () => {
  it("renders", () => {
    render(<Home />);

    // Hero Image
    expect(screen.getByRole("heading", { name: /momfit/i })).toBeVisible();
    expect(screen.getByTestId("heroDivider")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /functional \& corrective exercise for moms/i,
      })
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
  it("renders only logo, company name, and brief description on mobile", () => {
    rdd!.isMobileOnly = true;
    render(<Home />);

    expect(screen.getByRole("heading", { name: /momfit/i })).toBeVisible();
    expect(screen.getByTestId("heroDivider")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /functional \& corrective exercise for moms/i,
      })
    ).toBeVisible();

    expect(
      screen.queryByText(/our bodies are amazing/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /schedule a consultation/i })
    ).not.toBeInTheDocument();
  });
});
