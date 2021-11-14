import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.div<EstudioProps>`
  max-width: 100%;
  padding-top: 120px;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.lightBlue : theme.colors.secondary};
`;

export const Container = styled.div<EstudioProps>`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: flex;
  padding: 0 24px 32px;

  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.lightBlue : theme.colors.secondary};
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    padding: 0 16px;
    :last-child {
      padding-bottom: 32px;
    }
  }
`;

export const Column = styled.div`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  flex-direction: row;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    justify-content: center;
  }
  .estudios-icon {
    display: flex;
    margin: auto 0;
    align-items: center;
    padding: 8px 16px 0 0;
    font-size: 80px;
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      font-size: 50px;
    }
  }
`;

export const Row = styled.div``;

export const Icon = styled.div<EstudioProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.div<EstudioProps>`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.secondary : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 8px 0;
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: center;
  }
`;

export const Description = styled.div<EstudioProps>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.secondary : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.nunito};
  margin: 0 auto;
  display: flex;
  justify-content: left;
  padding: 8px 0;
  max-width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: center;
  }
`;
