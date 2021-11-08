import { FC } from "react";

import { TitleWrapper } from "./title.styled";

interface TitleProps {
  title: string;
  message: string;
  backgroundColor?: string;
  small?: boolean;
}

const Title: FC<TitleProps> = ({ title, message, backgroundColor, small }) => {
  return (
    <>
      <TitleWrapper backgroundColor={backgroundColor}>
        <h1 className={small ? "small" : ""}>{title}</h1>
        <h2>{message}</h2>
      </TitleWrapper>
    </>
  );
};
export default Title;
