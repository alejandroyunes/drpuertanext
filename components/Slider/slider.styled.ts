import styled from "styled-components";

export const ImagesStylesDesktop = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: none;
  }
  position: relative;
  margin: 0 auto;
  height: 100vh;
  max-height: 100%;
  .dots {
    position: absolute;
    width: 100%;
    z-index: 100;
    bottom: 0px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    height: 96vh;
  }
`;

export const SliderText = styled.div`
  position: absolute;
  top: 50%;
  left: 32%;
  transform: translate(-50%, -50%);
  h1 {
    text-align: end;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-size: 90px;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    h1 {
      text-align: start;
      font-size: ${({ theme }) => theme.fontSizes["6xl"]};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    transform: translate(-50%, -50%);
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["4.5xl"]};
    }
  }
  @media (max-width: 460px) {
    transform: translate(-45%, -50%);
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["4.5xl"]};
    }
  }
  @media (max-width: 420px) {
    transform: translate(-36%, -40%);
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["4.5xl"]};
    }
  }
`;
export const SliderTextColor = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-34%, -50%);
  h1 {
    text-align: start;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-size: 84px;
    color: ${({ theme }) => theme.colors.white};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    h1 {
      text-align: start;
      font-size: ${({ theme }) => theme.fontSizes["6xl"]};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    transform: translate(-34%, -40%);
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["4.5xl"]};
    }
  }
  @media (max-width: 460px) {
    transform: translate(-36%, -40%);
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    }
  }
  @media (max-width: 420px) {
    transform: translate(-36%, -38%);
    h1 {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    }
  }
`;

export const ImagesStylesMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    display: block;
    margin: 0 auto;
    height: 380px;
    .dots {
      position: absolute;
      width: 100%;
      z-index: 100;
      bottom: 0px;
      text-align: center;
    }
  }
`;
