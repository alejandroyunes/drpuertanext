import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.div<EstudioProps>`
  max-width: 100%;
  padding-top: 40px;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.secondary : theme.colors.white};

  .home {
    color: ${({ theme }) => theme.colors.primary};
  }
  .home-second {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

export const Container = styled.div<EstudioProps>`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: flex;
  padding-bottom: 32px;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.secondary : theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    padding-bottom: 0px;
  }
`;

export const Column = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto;
    max-width: 400px;
    padding: 8px 24px;
  }
`;

export const Social = styled.div<EstudioProps>`
  display: flex;
  justify-content: left;
  padding-left: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-left: 0;
  }
`;

export const Icon = styled.div<EstudioProps>`
  display: flex;
  justify-content: left;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  :last-child {
    padding: 8px 8px 0;
  }
`;

export const Title = styled.div<EstudioProps>`
  display: flex;
  justify-content: left;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.white : theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 8px 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 8px 0;
  }
`;

export const Description = styled.div<EstudioProps>`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.white : theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.nunito};
  margin: 0 auto;
  display: flex;
  justify-content: left;
  padding: 8px 24px;
  max-width: 400px;

  ul {
    li {
      padding: 2px 0;
      :hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding: 8px 0;
  }
`;
