import React, { useState } from "react";
import {
  DropdownItem,
  DropdownMenu,
  Img,
  LinkStyled,
  MenuToggle,
  NavbarStyled,
  Overlay,
} from "./NavbarStyled";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productos = ["Aperitivos", "Cervezas", "Destilados", "Vinos"];
  const showOverlay = isDropdownOpen || isDropdownOpen2;

  return (
    <>
      {showOverlay && <Overlay />}
      <NavbarStyled>
        <Img src="img/logoVermuteando2.png" alt="Logo Vermuteando" />
        <MenuToggle
          className={isMenuOpen ? "open" : ""}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </MenuToggle>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <LinkStyled href="#">Inicio</LinkStyled>
          <div
            className="dropdown"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <LinkStyled href="#">Productos</LinkStyled>
            {isDropdownOpen && (
              <DropdownMenu>
                {productos.map((producto, index) => (
                  <DropdownItem key={index}>
                    <LinkStyled href={`/productos/${producto.toLowerCase()}`}>
                      {producto}
                    </LinkStyled>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </div>
          <div
            className="dropdown2"
            onMouseEnter={() => setIsDropdownOpen2(true)}
            onMouseLeave={() => setIsDropdownOpen2(false)}
          >
            <LinkStyled href="#">Contactanos</LinkStyled>
            {isDropdownOpen2 && (
              <DropdownMenu>
                <DropdownItem>
                  <LinkStyled href="https://wa.me/2664774564" target="_blank">
                    WhatsApp
                  </LinkStyled>
                </DropdownItem>
                <DropdownItem>
                  <LinkStyled
                    href="https://www.instagram.com/vermute_ando"
                    target="_blank"
                  >
                    Instagram
                  </LinkStyled>
                </DropdownItem>
              </DropdownMenu>
            )}
          </div>
        </div>
      </NavbarStyled>
    </>
  );
};

export default Navbar;
