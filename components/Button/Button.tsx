import { FC } from "react";

import { Wrapper } from "./button.styled";
import Link from "next/link";
interface ButtonProps {
  buttonText?: string;
  link?: string;
  externalLink?: boolean;
}

const Button: FC<ButtonProps> = ({ buttonText, link, externalLink }) => {
  return (
    <Wrapper>
      <Link href={`${link}`}>
        <a target={externalLink ? "_blank" : ""}>
          <div className="btn btn-three">
            <span>{buttonText}</span>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

export default Button;
