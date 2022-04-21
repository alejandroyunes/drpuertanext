import { FC } from "react";
import {
  Wrapper,
  CardWrapper,
  Icon,
  Description,
  Button,
} from "./threeCardIcon.styled";
import Link from "next/link";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiFillMedicineBox } from "react-icons/ai";
import { GiHealthCapsule } from "react-icons/gi";
import { SiWorldhealthorganization } from "react-icons/si";
import _Button from "components/Button/Button";
const ThreeCardIcon: FC = () => {
  return (
    <>
      <Wrapper>
        <CardWrapper bgColor="#16425b">
          <Icon>
            <AiFillMedicineBox size={80} />
          </Icon>
          <Description>Médico Especialista en Otorrinolaringología</Description>
          <_Button
            buttonText={"leer más"}
            link={"/drpuerta"}
            externalLink={false}
          ></_Button>
        </CardWrapper>
        <CardWrapper bgColor="#3e8a9e">
          <Icon>
            <FaHandHoldingMedical size={80} />
          </Icon>
          <Description>Excelente Atención Postquirúrgica</Description>
          <_Button
            buttonText={"solicitar cita"}
            link={"/contacto"}
            externalLink={false}
          ></_Button>
        </CardWrapper>
        <CardWrapper bgColor="#032142">
          <Icon>
            <SiWorldhealthorganization size={80} />
          </Icon>
          <Description>Estudio Publicado</Description>
          <_Button
            buttonText={"leer más"}
            link={"/estudio.pdf"}
            externalLink={true}
          ></_Button>
        </CardWrapper>
      </Wrapper>
    </>
  );
};

export default ThreeCardIcon;
