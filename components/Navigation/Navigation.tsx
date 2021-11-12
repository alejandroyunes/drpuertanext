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
                    src={"/logo-darker.png"}
                    alt="Picture of the author"
                  />
                ) : (
                  <Image
                    width={160}
                    height={68}
                    src={"/logo-white.png"}
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
                <Link href="#noticias">
                  <li>
                    <a>Dr. Puerta</a>
                  </li>
                </Link>
                <Link href="#discografia">
                  <li>
                    <a>Galería</a>
                  </li>
                </Link>
                <Link href="/contact">
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
            <a>
              <Image
                src={`${header ? "/logo-white.png" : "/logo-darker.png"} `}
                height={60}
                width={150}
              />
            </a>
          </Link>
        </MobileLogo>
        <Hamburger openMenu={header} />
      </MobileNav>
      {/*  Mobile  */}
    </>
  );
};

export default Navigation;
