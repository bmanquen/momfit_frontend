import { RenderOptions, render } from "@testing-library/react";
import React from "react";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return children;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
