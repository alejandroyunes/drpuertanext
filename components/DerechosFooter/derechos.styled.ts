import styled from "styled-components";

export const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 0 auto;
  padding: 0 24px 16px;

  p {
    text-align: center;
    margin: 0 auto;
    font-size: 1rem;
    color: white;
    padding-top: 0px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    max-width: 600px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      font-size: 1rem;
    }
  }
`;
