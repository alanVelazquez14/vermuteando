import React from "react";
import { ContainerInfo, FooterStyled, ImgFooter } from "./FooterStyled";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyled>
      <ImgFooter src="img/logoVermuteando2.png" alt="" />
      <ContainerInfo>
        <p>Beber con moderación. Prohibida su venta a menores de 18 años.</p>
        <p>© 2024 Vermuteando. Todos los derechos reservados.</p>
        <p>Hecho por Alan Velazquez.</p>
      </ContainerInfo>
      <div className="social-icons">
        <a
          href="https://wa.me/2664774564"
          target="_black"
          rel="noopener noreferrer"
          className="iconWhatsapp"
          aria-label="WhatsApp"
        >
          {" "}
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/vermute_ando"
          target="_blank"
          rel="noopener noreferrer"
          className="iconInsta"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
