import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #131415;
  color: #fff;
  text-align: center;
  border-radius: 12px 12px 0 0;
  position: fixed;
  bottom: 0;
  height: auto;
  width: 100%;
  font-family: "Oswald";
  user-select: none;

  .social-icons {
    display: flex;
    gap: 30px;
  }

  .iconInsta {
    font-size: 30px;
    color: #fff;

    &:hover {
      color: #bc2a8d;
    }
  }

  .iconWhatsapp {
    font-size: 30px;
    color: #fff;

    &:hover {
      color: rgb(254, 218, 117);
    }
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Oswald";
  font-size: 15px;

  p {
    margin: 9px;
    font-size: 17px;
  }
`;

export const ImgFooter = styled.img`
  width: 160px;
  height: 120px;
`;
