import React, { useState } from "react";
import HeroHome from "./HeroHome"
import SearchResults from "./SearchResults";

export default function MainLayout() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <HeroHome onSearch={handleSearch} />
      <SearchResults results={searchResults} category={"La tua categoria"} />
    </>
  );
}