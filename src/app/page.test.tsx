import Home from "./page";
import React from "react";
import { render, screen } from "../utils/test-utils";
import * as rdd from "react-device-detect";

describe("Home Page, ", () => {
  it("renders hero section", () => {
    render(<Home />);

    // Hero Image
    expect(screen.getByRole("heading", { name: /momfit/i })).toBeVisible();
    expect(screen.getByTestId("heroDivider")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /functional \& corrective exercise for moms/i,
      })
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: /schedule a consultation/i })
    ).toBeVisible();
  });

  // Intro Section
  it("renders intro section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Learn the essentials/i })
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: /^schedule a consult$/i })
    ).toBeVisible();
    expect(screen.getByText(/MOMFIT is a highly specialized/i)).toBeVisible();
    expect(screen.getByText(/We start with a head-to-toe/i)).toBeVisible();
    expect(screen.getByText(/Whatever your goal is/i)).toBeVisible();
    expect(screen.getByAltText("picture of two friends")).toBeVisible();
  });

  // Help Section
  it("renders help section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /what we can help with/i })
    ).toBeVisible();
    expect(screen.getByText(/^pregnancy$/i)).toBeVisible();
    expect(screen.getByAltText(/pregnant surfer/i)).toBeVisible();
    expect(screen.getByText(/diastasis/i)).toBeVisible();
    expect(screen.getByAltText(/girl doing banded pull-ups/i)).toBeVisible();
    expect(screen.getByText(/prolapse/i)).toBeVisible();
    expect(
      screen.getByAltText(/personal trainer coaching deadlifts/i)
    ).toBeVisible();
    expect(screen.getByText(/weightloss/i)).toBeVisible();
    expect(screen.getByAltText(/lady running on the treadmill/i)).toBeVisible();
    expect(screen.getByText(/^posture$/i)).toBeVisible();
    expect(
      screen.getByAltText(/pregnant lady hiking in the mountains/i)
    ).toBeVisible();
    expect(screen.getByText(/chronic back pain/i)).toBeVisible();
    expect(screen.getByAltText(/lady rock climbing/i)).toBeVisible();
  });

  // About
});
