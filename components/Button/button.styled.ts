import styled from "styled-components";

interface EstudioProps {
  bgColor?: string;
}

export const Wrapper = styled.button`
  max-width: 100%;
  background-color: transparent;
  outline: none;
  border: 0;
  display: flex;
  justify-content: center;
  span {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  .btn {
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
  }

  .btn-three {
    color: #fff;
    transition: all 0.5s;
    position: relative;
  }
  .btn-three::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }
  .btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }
  .btn-three::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
  }
  .btn-three:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }
`;
