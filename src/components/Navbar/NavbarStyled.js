import styled from "styled-components";

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
  user-select: none;

  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
      justify-content: center;
      align-items: center;
      gap: 20px;
      background-color: #131415;
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      padding: 20px 0;
      border-radius: 0 0 20px 20px;
      z-index: 10;
      height: 150px;
    }

    &.open {
      display: flex;
    }
  }

  .dropdown {
    position: relative;
  }

  .dropdown2 {
    position: relative;
    margin-right: 30px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
`;

export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 25px;
  margin-right: 45px;

  div {
    position: absolute;
    width: 80%;
    height: 3px;
    background-color: white;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  div:nth-child(1) {
    top: 0;
  }

  div:nth-child(2) {
    top: 50%;
    transform: translateY(-40%);
  }

  div:nth-child(3) {
    bottom: 0;
  }

  &.open {
    div:nth-child(1) {
      transform: rotate(45deg) translate(11px, 11px);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

// Logo Styled
export const Img = styled.img`
  margin-left: 25px;
  margin-top: 25px;
  width: 170px;
  height: 130px;

  @media (max-width: 768px) {
    width: 130px;
    height: 90px;
}
`;

// Link Styled
export const LinkStyled = styled.a`
  color: white;
  text-decoration: none;
  margin: 1rem;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    color: #ab1515;
    /* background-color: #690c0c;
    border-radius: 5px; */
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
    background-color: #141516;
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
