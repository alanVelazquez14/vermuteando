import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const setSearch = (term) => setSearchTerm(term);
  return (
    <SearchContext.Provider value={{ searchTerm, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;