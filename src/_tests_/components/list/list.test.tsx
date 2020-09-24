import React from "react";
import { render } from "@testing-library/react";
import { EXAMPLE_ARRAY_ITEMS } from "../../constants/constants";
import List from "../../../components/list/list";
import "@testing-library/jest-dom/extend-expect";

test("renders proper list items", () => {
  const { getByText } = render(<List items={EXAMPLE_ARRAY_ITEMS} />);
  EXAMPLE_ARRAY_ITEMS.map((item) => {
    return expect(getByText(item)).toBeInTheDocument();
  });
});
