import React from "react";
import { render } from "@testing-library/react";
import { EXAMPLE_STRING } from "../../constants/constants";
import Button from "../../../components/button/button";
import "@testing-library/jest-dom/extend-expect";

test("renders button text properly", () => {
  const { getByText } = render(<Button text={EXAMPLE_STRING} />);
  const buttonText = getByText(EXAMPLE_STRING);
  expect(buttonText).toBeInTheDocument();
});
