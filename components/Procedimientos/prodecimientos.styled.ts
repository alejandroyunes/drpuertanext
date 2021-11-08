import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.div<EstudioProps>`
  max-width: 100%;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.secondary : theme.colors.white};
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
  }
`;

export const Column = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto 24px;
    width: auto;
    padding: 8px 24px;
  }
`;

export const Icon = styled.div<EstudioProps>`
  display: flex;
  justify-content: center;
  padding-bottom: 36px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.div<EstudioProps>`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.white : theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 8px 0;
`;

export const Description = styled.div<EstudioProps>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.white : theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.nunito};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 8px 0;
  max-width: 400px;
  text-align: center;
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
  width: 100%;
`;
