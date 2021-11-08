import { FC } from "react";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";
import { FcDiploma2 } from "react-icons/fc";
import { GrCertificate } from "react-icons/gr";
import { FcGraduationCap } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdLocalLibrary } from "react-icons/md";
import {
  Wrapper,
  Description,
  Title,
  Icon,
  Column,
  Container,
} from "./estudios.styled";

interface EstudioProps {
  bgColor?: string;
}

const Estudios: FC<EstudioProps> = ({ bgColor }) => {
  const backgroundColor = "white";
  const iconColor = "#37474F";
  return (
    <Wrapper bgColor={backgroundColor}>
      <Container bgColor={backgroundColor}>
        <Column>
          <Icon>
            <FaUniversity size={80} color={iconColor} />
          </Icon>
          <Title bgColor={backgroundColor}>Títulos Universitarios</Title>
          <Description bgColor={backgroundColor}>
            Médico y Cirujano Universidad de Antioquia 1990 - 1996.
          </Description>
        </Column>
        <Column>
          <Icon>
            <FcGraduationCap size={80} />
          </Icon>
          <Title bgColor={backgroundColor}>Posgrado</Title>
          <Description bgColor={backgroundColor}>
            Especialización en Otorrinolaringología 1997-2000.
          </Description>
        </Column>
      </Container>
      <Container bgColor={backgroundColor}>
        <Column>
          <Icon>
            <MdLocalLibrary size={80} color={iconColor} />
          </Icon>
          <Title bgColor={backgroundColor}>Diplomado</Title>
          <Description bgColor={backgroundColor}>
            Diplomado en Docencia Universitaria, Universidad de Antioquia 2007.
          </Description>
        </Column>
        <Column>
          <Icon>
            <AiFillMedicineBox size={80} color={iconColor} />
          </Icon>
          <Title bgColor={backgroundColor}>Universidad de Antioquia</Title>
          <Description bgColor={backgroundColor}>
            Jefe de Sección de Otorrinolaringología y Cirugía de Cabeza y
            Cuello. Facultad de Medicina Universidad de Antioquia. 2008 a 2018.
          </Description>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Estudios;
