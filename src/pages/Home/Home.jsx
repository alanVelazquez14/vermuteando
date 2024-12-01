import React from "react";
import { HomeStyled } from "./HomeStyled";
import Productos from "../../components/Productos/Productos";

export const Home = () => {
  return (
    <>
      <HomeStyled>
        <Productos />
      </HomeStyled>
    </>
  );
};

export default Home;
