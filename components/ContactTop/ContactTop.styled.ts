import styled from "styled-components";

export const WrapperData = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndices.tooltip};
  border-bottom: 1px solid #d7d7d7;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: ${({ theme }) => theme.breakpoint.md};
`;

export const Column = styled.div`
  padding: 0 16px;
  height: 38px;
  line-height: 38px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  p {
    border-left: 1px solid #d7d7d7;
    padding: 0 12px;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: 400;
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    &:first-child {
      display: none;
    }
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 38px;
  line-height: 38px;
  margin: 0 12px 0 0;
  color: ${({ theme }) => theme.colors.primary};
`;
