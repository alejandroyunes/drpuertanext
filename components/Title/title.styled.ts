import styled from "styled-components";

interface TitleProps {
  backgroundColor?: string;
}

export const TitleWrapper = styled.div<TitleProps>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor === "light"
      ? theme.colors.lightBlue
      : theme.colors.secondary};
  margin: 0 auto;
  padding: 32px 24px;
  h1 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes["5xl"]};
    letter-spacing: 4px;
    color: ${({ theme, backgroundColor }) =>
      backgroundColor === "light" ? theme.colors.tertiary : theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.nunito};
  }
  h2 {
    text-align: center;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme, backgroundColor }) =>
      backgroundColor === "light" ? theme.colors.tertiary : theme.colors.white};
    padding-top: 12px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }

  .small {
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 2rem;
    }
  }
`;
