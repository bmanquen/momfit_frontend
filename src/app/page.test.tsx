import Home from "./page";
import React from "react";
import { render } from "../utils/test-utils";

describe("Home Page, ", () => {
  it("renders", () => {
    render(<Home />);
  });
});
