import { describe } from "node:test";
import Home from "./page";
import React from "react";

describe("Home Page, ", () => {
  it("renders", () => {
    render(<Home />);
  });
});
