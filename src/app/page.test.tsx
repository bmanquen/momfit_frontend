import Home from "./page";
import React from "react";
import { render, screen } from "../utils/test-utils";

describe("Home Page, ", () => {
  it("renders hero section", () => {
    render(<Home />);

    // Hero Image
    expect(screen.getByRole("heading", { name: /^momfit$/i })).toBeVisible();
    expect(screen.getByTestId("heroDivider")).toBeVisible();
    expect(
      screen.getByRole("heading", {
        name: /functional \& corrective exercise for moms/i,
      })
    ).toBeVisible();
  });

  // Intro Section
  it("renders intro section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Learn the essentials/i })
    ).toBeVisible();
    expect(screen.getByRole("button", { name: /contact us/i })).toBeVisible();
    expect(screen.getByText(/Are you unsure/i)).toBeVisible();
    expect(screen.getByText(/Are you frustrated/i)).toBeVisible();
    expect(screen.getByText(/We offer mommy/i)).toBeVisible();
    expect(screen.getByText(/we're here to help/i)).toBeVisible();
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
    expect(screen.getByText(/^diastasis$/i)).toBeVisible();
    expect(screen.getByAltText(/girl doing banded pull-ups/i)).toBeVisible();
    expect(screen.getByText(/^prolapse$/i)).toBeVisible();
    expect(
      screen.getByAltText(/personal trainer coaching deadlifts/i)
    ).toBeVisible();
    expect(screen.getByText(/weightloss/i)).toBeVisible();
    expect(screen.getByAltText(/lady running on the treadmill/i)).toBeVisible();
    expect(screen.getByText(/^posture$/i)).toBeVisible();
    expect(
      screen.getByAltText(/pregnant lady hiking in the mountains/i)
    ).toBeVisible();
    expect(screen.getByText(/chronic back aches/i)).toBeVisible();
    expect(screen.getByAltText(/^ladies doing yoga$/i)).toBeVisible();
  });

  // About
  it("renders about section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /about brooke/i })
    ).toBeVisible();
    expect(screen.getByText(/nasm cpt, pces/i)).toBeVisible();
    expect(screen.getByText(/i got pregnant/i)).toBeVisible();
    expect(screen.getByText(/after my postpartum diagnosis/i)).toBeVisible();
    expect(
      screen.getByRole("img", {
        name: /mom and baby at the beach with a surfboard/i,
      })
    ).toBeVisible();
    expect(screen.getByRole("img", { name: /brooke and zeke/i })).toBeVisible();
  });

  // Contact
  it("renders contact section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /contact momfit/i })
    ).toBeVisible();
    expect(screen.getByText(/momfitokc@gmail.com/i)).toBeVisible();
    expect(screen.getByText("(714)-732-3484")).toBeVisible();
    expect(screen.getByText(/Located in Edmond, Ok/i)).toBeVisible();
  });
});
