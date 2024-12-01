import styled from "styled-components";

export const SearchStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  input {
    width: 250px;
    padding: 10px;
    border: none;
    font-size: 17px;
    font-family: "Oswald";
    background-color: #131415;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
  }

  button {
    background-color: #131415;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid white;
    font-size: 19px;
    color: red;
  }
  
  @media (max-width: 1250px) {
    input {
      width: 110px;
      font-size: 15px;
    }
    button{
      font-size: 17px;
    }
  }
  @media (max-width: 1050px) {
    input {
      width: 90px;
      font-size: 14px;
    }
    button{
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    input {
      width: 100px;
      font-size: 13px;
    }
    button{
      font-size: 16px;
    }
  }


`;
