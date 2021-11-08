import styled from "styled-components";

interface StyledHeaderProps {
  openMenu: boolean;
}

export const BackgroundTop = styled.div`
  width: 100%;
  padding-top: 80px;
  height: 30vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #3e8a9e;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
    padding: 24px 0;
    text-align: center;
  }
  p {
    padding: 4px 0;
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }
`;

export const Text = styled.div`
  max-width: 600px;
`;
