import styled from "styled-components";

export const FormStyeld = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  font-family: "Oswald";
`;

export const InputStyled = styled.input`
  font-size: 20px;
  font-family: "Oswald";
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextareaStyled = styled.textarea`
  font-family: "Oswald";
  font-size: 20px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  font-family: "Oswald";
  font-size: 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #871426;
  }
`;

export const Parrafo = styled.p`
  font-size: 20px;
  color: white;
  font-family: "Oswald";
`;

export const LinkContacto = styled.a`
  font-size: 20px;
  color: white;
  text-decoration: none;
  margin: 20px;
  font-family: "Oswald";
  transition: color 0.3s;

  &:hover {
    color: #871426;
  }
`;
