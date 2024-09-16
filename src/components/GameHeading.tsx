import { Heading } from "@chakra-ui/react";
import { GameQuery, useGameQuery } from "../contexts/GameQueryContext";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = () => {
  const { gameQuery } = useGameQuery();
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
