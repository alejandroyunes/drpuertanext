import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.div<EstudioProps>`
  max-width: 100%;
  padding-top: 120px;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.lightBlue : theme.colors.secondary};
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding-top: 80px;
  }
`;

export const Container = styled.div<EstudioProps>`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: flex;
  padding: 0 24px 32px;
  background-color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.lightBlue : theme.colors.secondary};

  :last-child {
    padding-bottom: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;
  }
`;

export const Column = styled.div`
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    max-width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  .estudios-icon {
    margin: auto 0;
    padding: 8px 16px 0 0;
    font-size: 32px;
  }
  .google-maps {
    padding-top: 40px;
    display: inline-flex;
  }
  .ver-google {
    font-size: 16px;
    padding: 8px 0px 0 0;
  }
  .como-llegar {
    padding-bottom: 40px;
  }
`;
export const ColumnMaps = styled.div`
  display: inline-flex;
  padding: 24px 0;

  .last-child {
    margin-left: 24px;
  }
  .title {
    font-size: 16px;
    padding: 8px 0px 0 0;
    text-align: center;
  }
  .map-link {
    cursor: pointer;
    outline: 1px solid #37474f;
    padding-top: 6px;
  }
  .map-icon {
  }
  a {
    width: 160px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    a {
      width: 50%;
    }
  }
`;

export const Icon = styled.div<EstudioProps>`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.div<EstudioProps>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme, bgColor }) =>
    bgColor === "white" ? theme.colors.secondary : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 8px 32px 8px 8px;
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: left;
  }
`;

export const ColumnImage = styled.div`
  margin: 0 auto;
  max-width: 860px;
  display: flex;
  flex-direction: row;
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`;
