import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3e8a9e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    padding: 24px 0;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const Column = styled.div`
  background-color: red;
  display: flex;
`;
