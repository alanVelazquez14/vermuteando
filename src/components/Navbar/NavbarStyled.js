import styled from "styled-components";

// Navbar Styled
export const NavbarStyled = styled.div`
  background-color: #131415;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  border-radius: 0 0 10px 10px;
  font-family: "Oswald";
  position: relative;
  z-index: 10;

  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .dropdown {
    position: relative;
  }

  .dropdown2 {
    position: relative;
    margin-right: 30px;
  }
`;

// Logo Styled
export const Img = styled.img`
  margin-left: 25px;
  margin-top: 25px;
  width: 170px;
  height: 130px;
`;

// Link Styled
export const LinkStyled = styled.a`
  color: white;
  text-decoration: none;
  margin: 1rem;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #690c0c;
    border-radius: 5px;
  }
`;

// Dropdown Styled
export const DropdownMenu = styled.ul`
  text-align: left;
  position: absolute;
  background-color: #131415;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  top: 100%;
  left: 0;
  width: 150px;
  z-index: 1000;
  border-radius: 5px;
`;

export const DropdownItem = styled.li`
  padding: 10px 20px;
  &:hover {
    background-color: #690c0c;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 5;
  pointer-events: none;
`;