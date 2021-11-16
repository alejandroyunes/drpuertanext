import { FC } from "react";

import { Wrapper, Column, Icon, WrapperData } from "./ContactTop.styled";
import { GoLocation } from "react-icons/go";
import { BsTelephoneOutbound } from "react-icons/bs";
const ContactTop: FC = () => {
  return (
    <WrapperData>
      <Wrapper>
        <Column>
          <Icon>
            <GoLocation />
          </Icon>
          <p>Cl. 4 Sur #43a-195 - oficina 165 – Medellín Colombia</p>
        </Column>
        <Column>
          <Icon>
            <BsTelephoneOutbound />
          </Icon>
          <p>Fijo: +6 04 268 5436 – Cel: 318 898 1046</p>
        </Column>
      </Wrapper>
    </WrapperData>
  );
};
export default ContactTop;
