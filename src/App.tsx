import React from "react";
import GlobalStyles from "./commons/globalstyles/globalstyles";
import fetchCharacters from "./characters/api/fetchcharacters";
import Spinner from "./components/spinner/spinner";
import ErrorMessage from "./components/errormessage/errormessage";
import Button from "./components/button/button";
import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import Character from "./characters/interfaces/character/character";

const App = () => {
  const [loadingStatus, setLoadingStatus] = React.useState({
    loading: false,
    error: false,
  });
  const [page, setPage] = React.useState(1);
  const [noMoreResults, setNoMoreResults] = React.useState(false);
  const [characters, setCharacters] = React.useState<Character[]>([]);

  const { loading, error } = loadingStatus;

  const mappedCharacters = characters.map((character: Character) => (
    <Card key={character.id} character={character} />
  ));

  React.useEffect(() => {
    const fetchResults = async () => {
      setLoadingStatus({ loading: true, error: false });
      try {
        const response = await fetchCharacters(page);
        const newCharacters = response.characters;
        setCharacters((characters: Character[]) => [
          ...characters,
          ...newCharacters,
        ]);
        setLoadingStatus({ loading: false, error: false });
        if (!response.info.next) {
          return setNoMoreResults(true);
        }
        setNoMoreResults(false);
      } catch (error) {
        setLoadingStatus({ loading: false, error: true });
      }
    };
    fetchResults();
  }, [page]);

  return (
    <>
      <GlobalStyles />
      <main style={{ width: "100%", height: "100%" }}>
        <Grid>{mappedCharacters}</Grid>
        {error && (
          <ErrorMessage
            text={"Oops, there was an error while fetching. Maybe try again?"}
          />
        )}
        <div
          style={{
            margin: "2.5em 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: loading ? "column" : "row",
          }}
        >
          {loading && <Spinner />}

          {!loading && (
            <Button
              disabled={noMoreResults}
              onClick={() => setPage(page + 1)}
              text={
                noMoreResults
                  ? "Sorry, we are all out of characters :("
                  : "Load More"
              }
            />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
