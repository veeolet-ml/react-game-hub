import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { GameQueryContext } from "../App";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { gameQuery, setGameQuery } = useContext(GameQueryContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current)
          setGameQuery({ ...gameQuery, searchText: ref.current.value });
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
