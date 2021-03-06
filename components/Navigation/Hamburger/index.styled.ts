import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const HamburgerMenu = styled.div`
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  z-index: ${({ theme }) => theme.zIndices.dropdown};
`;

export const Menu = styled.div<StyledHeaderProps>`
  position: absolute;
  top: 16px;
  right: 0px;
  -webkit-user-select: none;
  user-select: none;
  input {
    display: block;
    width: 80px;
    height: 60px;
    position: absolute;
    top: -7px;
    right: 14px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }
  span {
    display: block;
    width: 33px;
    height: 4px;
    right: 20px;
    margin-bottom: 5px;
    position: relative;
    background: ${({ openMenu, theme }) =>
      openMenu ? theme.colors.white : theme.colors.white};
    border-radius: 2px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(6px, -5px);
    background: ${({ theme }) => theme.colors.white};
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(4px, 7px);
  }
  input:checked ~ ul {
    transform: none;
  }
`;

export const Links = styled.ul`
  color: ${({ theme }) => theme.colors.white};
  width: 200px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.dropdown};
  position: absolute;
  right: 0;
  top: -16px;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transform-origin: 10px;
  transform: translate(0, -100%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  li {
    padding: 10px 0;
    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts.nunito};
  }
  li:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;
