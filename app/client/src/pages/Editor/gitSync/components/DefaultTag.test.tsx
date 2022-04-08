import DefaultTag from "./DefaultTag";
import { render, screen } from "test/testUtils";
import React from "react";
import "jest-styled-components";

describe("DefaultTag", () => {
  it("renders properly", async () => {
    render(<DefaultTag />);
    const actual = await screen.queryByTestId("t--default-tag");

    // renders
    expect(actual).not.toBeNull();

    // contains DEFAULT text
    expect(actual?.innerHTML.includes("DEFAULT")).toBeTruthy();

    // styles
    expect(actual).toHaveStyleRule("display", "flex");
    expect(actual).toHaveStyleRule("justify-content", "flex-end");
    expect(actual).toHaveStyleRule("flex", "1");
  });
});
