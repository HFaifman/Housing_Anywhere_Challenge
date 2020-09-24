import React from "react";
import { render } from "@testing-library/react";
import { EXAMPLE_CHILDREN } from "../../constants/constants";
import Grid from "../../../components/grid/grid";
import "@testing-library/jest-dom/extend-expect";

test("renders error message text properly", () => {
  const { getByText } = render(<Grid>{EXAMPLE_CHILDREN}</Grid>);
  const childrenText = getByText(EXAMPLE_CHILDREN);
  expect(childrenText).toBeInTheDocument();
});
