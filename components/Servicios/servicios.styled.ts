import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.lg};
  margin: 0 auto;
  display: flex;
  padding-bottom: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
  }
`;

export const NewsWrapper = styled.div`
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: 0 auto 24px;
    width: auto;
    padding: 8px 24px;
  }
`;

export const ImageHeading = styled.div`
  max-width: 600px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin: 0 auto;
  padding: 8px 0;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding: 8px 0;
  max-width: 600px;
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  color: ${({ theme }) => theme.colors.tertiary};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 8px 0;
  width: 100%;
`;
