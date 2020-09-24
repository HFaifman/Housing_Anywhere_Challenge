import React from "react";
import { render } from "@testing-library/react";
import { EXAMPLE__CHARACTER } from "../../constants/constants";
import Card from "../../../components/card/card";
import "@testing-library/jest-dom/extend-expect";

test("renders character properly", () => {
  const { getByText, getByAltText } = render(
    <Card character={EXAMPLE__CHARACTER} />
  );
  const {
    name,
    status,
    type,
    gender,
    origin,
    species,
    location,
    episodes,
  } = EXAMPLE__CHARACTER;
  const mappedEpisodes = episodes.map((episode) => episode.name);
  expect(getByText(name)).toBeInTheDocument();
  expect(getByText(status)).toBeInTheDocument();
  expect(getByText(type)).toBeInTheDocument();
  expect(getByAltText(name)).toBeInTheDocument();
  expect(getByText(gender)).toBeInTheDocument();
  expect(getByText(origin.name)).toBeInTheDocument();
  expect(getByText(species)).toBeInTheDocument();
  expect(getByText(species)).toBeInTheDocument();
  expect(getByText(location.name)).toBeInTheDocument();
  mappedEpisodes.map((episode) =>
    expect(getByText(episode)).toBeInTheDocument()
  );
});
