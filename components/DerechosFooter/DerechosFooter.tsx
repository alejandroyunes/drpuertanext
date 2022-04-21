import { FC } from "react";

import { TitleWrapper } from "./derechos.styled";

const Contact: FC = () => {
  let date = new Date().getFullYear();
  return (
    <>
      <TitleWrapper id="contacto">
        <p>{`${date} © Dr Jorge Puerta. Todos los derechos reservados. `}</p>
      </TitleWrapper>
    </>
  );
};
export default Contact;
