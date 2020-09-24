import React from "react";
import { render } from "@testing-library/react";
import { EXAMPLE_STRING } from "../../constants/constants";
import ErrorMessage from "../../../components/errormessage/errormessage";
import "@testing-library/jest-dom/extend-expect";

test("renders error message text properly", () => {
  const { getByText } = render(<ErrorMessage text={EXAMPLE_STRING} />);
  const errorMessageText = getByText(EXAMPLE_STRING);
  expect(errorMessageText).toBeInTheDocument();
});
