import { createContext, ReactNode, useContext, useState } from "react";
import { Game, Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

interface GameQueryContextType {
  gameQuery: GameQuery;
  setGameQuery: (query: GameQuery) => void;
}

const GameQueryContext = createContext<GameQueryContextType | undefined>(
  undefined
);

export const useGameQuery = () => {
  const context = useContext(GameQueryContext);
  if (!context) {
    throw new Error("useGameQuery must be within a GameQueryProvider");
  }
  return context;
};

export const GameQueryProvider = ({ children }: { children: ReactNode }) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
};
