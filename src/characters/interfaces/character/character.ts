import Episode from "./episode";
import Location from "./location";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  url: string;
  episodes: Episode[];
  location: Location;
  image: string;
  episode: string[];
  created: string;
}
export default Character;
