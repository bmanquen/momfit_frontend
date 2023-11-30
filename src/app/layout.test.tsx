import RootLayout from "./layout";
import React from "react";
import { render, screen } from "../utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("Root Layout, ", () => {
  it("renders", () => {
    render(
      <RootLayout>
        <div>hi</div>
      </RootLayout>
    );
    // TODO
    // expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
    //   "href",
    //   "/"
    // );
    // expect(screen.getByRole("link", { name: /exercises/i })).toHaveAttribute(
    //   "href",
    //   "/exercises"
    // );
    // expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute(
    //   "href",
    //   "/blog"
    // );
  });
  it("active nav css changes on click", async () => {
    const user = userEvent.setup();

    render(
      <RootLayout>
        <div>hi</div>
      </RootLayout>
    );

    // TODO
    // await user.click(screen.getByRole("button", { name: /exercises/i }));
    // expect(screen.getByTestId(/navItem1/i)).toHaveClass("border-solid");
  });
});
