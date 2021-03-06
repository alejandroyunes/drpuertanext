import styled from "styled-components";
interface StyledHeaderProps {
  openMenu: boolean;
}

export const DesktopNav = styled.div<StyledHeaderProps>`
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.transparent}; */
  background-color: ${({ openMenu, theme }) =>
    openMenu ? theme.colors.darkerGray : theme.colors.darkerGray};
  box-shadow: 0 1px 3px rgb(0 0 0 / 15%);
  position: ${({ openMenu }) => (openMenu ? "fixed" : "absolute")};
  animation: ${({ openMenu }) => (openMenu ? "navbar-slice-down 1s" : "none")};
  transform: ${({ openMenu }) => (openMenu ? "translate(-50%, 0)" : "none")};
  left: ${({ openMenu }) => (openMenu ? "50%" : "none")};
  height: 80px;
  align-items: ${({ openMenu }) => (openMenu ? "center" : "none")};
  display: ${({ openMenu }) => (openMenu ? "flex" : "block")};
  justify-content: ${({ openMenu }) => (openMenu ? "space-between" : "none")};
  top: ${({ openMenu }) => (openMenu ? "0" : "none")};
  z-index: ${({ theme }) => theme.zIndices.sticky};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    height: 60px;
  }
`;
export const LinksWrapper = styled.div`
  margin: 0 auto;
  width: ${({ theme }) => theme.breakpoint.md};
  @keyframes navbar-slice-down {
    0% {
      background-color: balticSea;
      top: -101px;
    }
    35% {
      background-color: balticSea;
    }

    100% {
      background-color: balticSea;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 8px;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;
export const Menu = styled.div<StyledHeaderProps>`
  display: flex;
  align-items: center;

  .active {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
  li {
    display: inline-flex;
    position: relative;
    padding: 0 12px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-size: 18px;
    font-weight: 700;
    color: ${({ openMenu, theme }) =>
      openMenu ? theme.colors.white : theme.colors.white};
    cursor: pointer;
    span {
      display: flex;
      padding: 0 4px;
    }
  }

  li:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
  }
  li::before {
    transition: 300ms;
    height: 3px;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
  li::before {
    width: 0%;
    bottom: -10px;
  }
  li:hover::before {
    width: 80%;
  }
`;
export const ImageMain = styled.div`
  display: flex;
  cursor: pointer;
`;
///**  Mobile Menu
//In case mobile dropdown needs a color height.
export const MobileBar = styled.div<StyledHeaderProps>`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    position: fixed;
    animation: ${({ openMenu }) =>
      openMenu ? "navbar-slice-down 1s" : "none"};
    top: ${({ openMenu }) => (openMenu ? "0" : "none")};
    z-index: ${({ theme }) => theme.zIndices.sticky};
    width: 100%;
    height: 60px;
    background-color: ${({ theme, openMenu }) =>
      openMenu ? theme.colors.black : theme.colors.primary};
    opacity: ${({ openMenu }) => (openMenu ? "0.5" : "1")};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;

export const MobileNav = styled.div<StyledHeaderProps>`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    position: ${({ openMenu }) => (openMenu ? "fixed" : "absolute")};
    animation: ${({ openMenu }) =>
      openMenu ? "navbar-slice-down 1s" : "none"};
    top: ${({ openMenu }) => (openMenu ? "0" : "none")};
    z-index: ${({ theme }) => theme.zIndices.sticky};
    background-color: ${({ theme, openMenu }) =>
      openMenu ? theme.colors.secondary : theme.colors.transparent};
    width: 100%;
    height: 60px;
    justify-content: space-between;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
  }
`;
export const MobileLogo = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: flex;
    cursor: pointer;
    align-items: center;
    margin: 5px 0 0 16px;
    -webkit-tap-highlight-color: transparent;
  }
`;
