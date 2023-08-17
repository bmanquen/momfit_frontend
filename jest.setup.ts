import "@testing-library/jest-dom";
import React from "react";

// Workaround for nextjs Image
function MockImage(props) {
  return React.createElement("img", props);
}
jest.mock("next/image", () => MockImage);
