import React from "react";
import { render } from "@testing-library/react";
import { SPINNER_TEST_ID } from "../../constants/constants";
import Spinner from "../../../components/spinner/spinner";
import "@testing-library/jest-dom/extend-expect";

test("renders spinner", () => {
  const { getByTestId } = render(<Spinner />);
  expect(getByTestId(SPINNER_TEST_ID)).toBeInTheDocument();
});
