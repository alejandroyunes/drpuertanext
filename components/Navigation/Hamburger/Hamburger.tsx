import { useState, FC } from "react";
import Link from "next/link";

import { HamburgerMenu, Menu, Links } from "./index.styled";
interface StyledHeaderProps {
  openMenu: boolean;
}

export const Hamburger: FC<StyledHeaderProps> = ({ openMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenu>
        <Menu openMenu={openMenu} onMouseLeave={() => setMenuOpen(false)}>
          <input
            type="checkbox"
            // defaultChecked={menuOpen}
            checked={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            //The onChange deletes the error message about the checked prop
            onChange={(e) => {}}
          />
          <span></span>
          <span></span>
          <span></span>
          <Links>
            <Link href="/">
              <li onClick={() => setMenuOpen(false)}>
                <a>Inicio</a>
              </li>
            </Link>
            <Link href="/drpuerta">
              <li onClick={() => setMenuOpen(false)}>
                <a>Dr. Puerta</a>
              </li>
            </Link>
            <Link href="/galeria">
              <li onClick={() => setMenuOpen(false)}>
                <a>Galería</a>
              </li>
            </Link>
            <Link href="/contacto">
              <li onClick={() => setMenuOpen(false)}>
                <a>Contacto</a>
              </li>
            </Link>
          </Links>
        </Menu>
      </HamburgerMenu>
    </>
  );
};

export default Hamburger;
