import { useEffect, useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger/Hamburger";

import {
  DesktopNav,
  LinksWrapper,
  Menu,
  ImageMain,
  LinksContainer,
  MobileBar,
  MobileNav,
  MobileLogo,
} from "./index.styled";

const Navigation: FC = () => {
  const [header, setHeader] = useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY <= 101) {
      setHeader(false);
    } else if (window.scrollY >= 101) {
      setHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      {/*  Desktop */}
      <DesktopNav openMenu={header}>
        <LinksWrapper>
          <LinksContainer>
            <Link href="/">
              <ImageMain>
                {header ? (
                  <Image
                    width={200}
                    height={80}
                    src={`/logo-white.png`}
                    alt="Picture of the author"
                  />
                ) : (
                  <Image
                    width={160}
                    height={68}
                    src={`/logo-darker.png`}
                    alt="Picture of the author"
                  />
                )}
              </ImageMain>
            </Link>
            <Menu openMenu={header}>
              <ul>
                <Link href="/">
                  <li>
                    <a>Inicio</a>
                  </li>
                </Link>
                <Link href="/drpuerta">
                  <li>
                    <a>Dr. Puerta</a>
                  </li>
                </Link>
                <Link href="/galeria">
                  <li>
                    <a>Galería</a>
                  </li>
                </Link>
                <Link href="/contacto">
                  <li>
                    <a>Contacto</a>
                  </li>
                </Link>
              </ul>
            </Menu>
          </LinksContainer>
        </LinksWrapper>
      </DesktopNav>
      {/*  Desktop */}
      {/*  Mobile  */}
      <MobileNav openMenu={header}>
        <MobileLogo>
          <Link href="/">
            {header ? (
              <Image
                width={150}
                height={60}
                src={`/logo-white.png`}
                alt="Picture of the author"
              />
            ) : (
              <Image
                width={150}
                height={60}
                src={`/logo-darker.png`}
                alt="Picture of the author"
              />
            )}
          </Link>
        </MobileLogo>
        <Hamburger openMenu={header} />
      </MobileNav>
      {/*  Mobile  */}
    </>
  );
};

export default Navigation;
