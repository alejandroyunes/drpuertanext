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
import { GiNurseFemale } from "react-icons/gi";
import { GiHealthCapsule } from "react-icons/gi";
import { SiWorldhealthorganization } from "react-icons/si";
const ThreeCardIcon: FC = () => {
  return (
    <>
      <Wrapper>
        <CardWrapper bgColor="#16425b">
          <Icon>
            <FaHandHoldingMedical size={80} />
          </Icon>
          <Description>Médico Especialista en Otorrinolaringología</Description>
          <Link href="/drpuerta">
            <a>leer más</a>
          </Link>
        </CardWrapper>
        <CardWrapper bgColor="#3e8a9e">
          <Icon>
            <GiHealthCapsule size={80} />
          </Icon>
          <Description>Excelente Atención Postquirúrgica</Description>
          <Link href="/contacto">
            <a>solicitar cita</a>
          </Link>
        </CardWrapper>
        <CardWrapper bgColor="#032142">
          <Icon>
            <SiWorldhealthorganization size={80} />
          </Icon>
          <Description>Estudios Publicados</Description>
          <Link href="/estudio.pdf">
            <a target="_blank">leer más</a>
          </Link>
        </CardWrapper>
      </Wrapper>
    </>
  );
};

export default ThreeCardIcon;
