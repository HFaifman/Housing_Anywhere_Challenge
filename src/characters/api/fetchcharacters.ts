import { BASE_URL } from "../../commons/constants/baseurl";
import PaginatedResponse from "../../commons/interfaces/paginatedresults";
import Location from "../interfaces/character/location";
import Character from "../interfaces/character/character";

const fetchCharacters = async (page: number) => {
  const response: PaginatedResponse<Character> = await (
    await fetch(`${BASE_URL}/character/?page=${page}`)
  ).json();
  const info = response.info;
  const characters = await Promise.all(
    response.results.map(async (character) => {
      const episodes = await Promise.all(
        character.episode.map(async (episode) => {
          return await (await fetch(episode)).json();
        })
      );

      if (character.location.url.length) {
        const location: Location = await (
          await fetch(character.location.url)
        ).json();
        return { ...character, location, episodes };
      }
      return { ...character, episodes };
    })
  );

  return { info, characters };
};
export default fetchCharacters;
