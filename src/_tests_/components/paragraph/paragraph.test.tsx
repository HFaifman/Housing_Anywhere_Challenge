import React from "react";
import { render } from "@testing-library/react";
import {
  EXAMPLE_STRING,
  EXAMPLE_TITLE,
  UNKNOWN,
  FALLBACK_TEXT,
} from "../../constants/constants";
import Paragraph from "../../../components/paragraph/paragraph";
import "@testing-library/jest-dom/extend-expect";

test("renders text properly and no title if no defined", () => {
  const { getByText, queryByText } = render(
    <Paragraph text={EXAMPLE_STRING} />
  );
  const paragraphText = getByText(EXAMPLE_STRING);
  const titleText = queryByText(EXAMPLE_TITLE);
  expect(paragraphText).toBeInTheDocument();
  expect(titleText).toBeFalsy();
});

test("renders text properly and title", () => {
  const { getByText } = render(
    <Paragraph text={EXAMPLE_STRING} title={EXAMPLE_TITLE} />
  );
  const paragraphText = getByText(EXAMPLE_STRING);
  const titleText = getByText(EXAMPLE_TITLE);
  expect(paragraphText).toBeInTheDocument();
  expect(titleText).toBeInTheDocument();
});

test("renders Unknown if text is empty", () => {
  const { getByText } = render(<Paragraph text={""} />);
  const unknownText = getByText(UNKNOWN);
  expect(unknownText).toBeInTheDocument();
});

test("renders proper fallback text if text is empty", () => {
  const { getByText } = render(
    <Paragraph text={""} fallBackText={FALLBACK_TEXT} />
  );
  const fallbackText = getByText(FALLBACK_TEXT);
  expect(fallbackText).toBeInTheDocument();
});
