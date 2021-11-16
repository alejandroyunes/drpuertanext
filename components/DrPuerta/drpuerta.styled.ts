import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.div<EstudioProps>`
  max-width: 100%;
  padding-top: 60px;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  .como-llegar {
    padding-bottom: 40px;
  }
`;

export const Title = styled.div<EstudioProps>`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: #37474f;
  padding: 8px 32px 8px 8px;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: #37474f;
  font-family: ${({ theme }) => theme.fonts.nunito};
  padding: 8px 32px 8px 8px;
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    text-align: left;
  }
`;
