import styled from "styled-components";

export const TitleProductos = styled.h1`
  text-align: center;
  font-family: "Oswald";
  font-size: 2.5rem;
  margin: 20px 0;
  font-weight: 400;

`

export const ContainerProductos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h3 {
    margin: 10px 0;
    font-weight: 200;
  }

  p {
    margin: 10px 0;
    font-weight: 200;
  }
`;

export const ProductosStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Oswald";
  /* background-color: #131415; */
  width: auto;
  margin: 15px;
  cursor: pointer;
  transition: transform  ease, box-shadow 0.3s ease; /* Transición suave */

  &:hover {
    transform: scale(1.05); /* Aumenta ligeramente el tamaño */
    color: #ab1515;
  }
`;

export const ImagenProducto = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 5px;
`;
