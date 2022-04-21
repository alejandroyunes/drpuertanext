import { useEffect, useState, FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "./Hamburger/Hamburger";
import { useRouter } from "next/router";
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
  const router = useRouter();

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
                    src={`/logo-white.png`}
                    alt="Picture of the author"
                  />
                )}
              </ImageMain>
            </Link>
            <Menu openMenu={header}>
              <ul>
                <Link href="/">
                  <li className={router.pathname == "/" ? "active" : ""}>
                    Inicio
                  </li>
                </Link>
                <Link href="/drpuerta">
                  <li
                    className={router.pathname == "/drpuerta" ? "active" : ""}
                  >
                    Dr. Puerta
                  </li>
                </Link>
                <Link href="/galeria">
                  <li className={router.pathname == "/galeria" ? "active" : ""}>
                    Galería
                  </li>
                </Link>
                <Link href="/contacto">
                  <li
                    className={router.pathname == "/contacto" ? "active" : ""}
                  >
                    Contacto
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
                src={`/logo-white.png`}
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
