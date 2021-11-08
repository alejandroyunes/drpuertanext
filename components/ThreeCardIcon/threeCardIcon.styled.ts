import styled from "styled-components";

interface CardProps {
  bgColor: string;
}

export const Wrapper = styled.div`
  /* max-width: ${({ theme }) => theme.breakpoint.lg}; */
  margin: 0 auto;
  display: flex;
  background-color: white;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
  }
  a {
    outline: 1px solid white;
    display: flex;
    justify-content: center;
    max-width: 180px;
    margin: 10px auto 40px;
    padding: 4px 0;
    border-radius: 12px;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const CardWrapper = styled.div<CardProps>`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.nunito};
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  padding: 36px 0 12px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0 12px;
  text-align: center;
`;

export const Button = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0;
  text-align: center;
`;
