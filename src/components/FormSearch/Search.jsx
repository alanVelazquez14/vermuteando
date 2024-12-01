import React, { useState } from "react";
import { SearchStyled } from "./SearchStyled";
import { IoSearch } from "react-icons/io5";
import { useSearch } from "../../../SearchProvider"; // Importar el hook

const Search = () => {
  const { setSearch } = useSearch(); // Obtener setSearch desde el contexto
  const [searchTerm, setLocalSearchTerm] = useState(""); // Estado local solo para el input

  const handleChange = (e) => {
    const term = e.target.value;
    setLocalSearchTerm(term); // Actualizar el estado local del input
    setSearch(term); // Actualizar el estado global de búsqueda
  };

  return (
    <SearchStyled>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleChange} // Actualiza tanto el estado local como el global
      />
      <button type="submit">
        <IoSearch />
      </button>
    </SearchStyled>
  );
};

export default Search;
