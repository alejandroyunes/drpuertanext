import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.div<EstudioProps>`
  background-color: ${({ theme }) => theme.colors.green};
  margin: 80px 0 0px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 60px 0 0;
  }
`;

export const Container = styled.div<EstudioProps>`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: flex;
`;

export const Column = styled.div`
  margin: 0 auto;
  display: flex;
`;

export const Row = styled.div`
  padding: 24px;
`;
