import RootLayout from "./layout";
import React from "react";

describe("Root Layout, ", () => {
  it("renders", () => {
    render(
      <RootLayout>
        <div></div>
      </RootLayout>
    );
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: /exercises/i })).toHaveAttribute(
      "href",
      "/exercises"
    );
    expect(screen.getByRole("link", { name: /blog/i })).toHaveAttribute(
      "href",
      "/blog"
    );
  });
});
