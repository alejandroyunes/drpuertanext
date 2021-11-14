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
  Row,
  Container,
} from "./contacto.styled";

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
          <Row>
            <Icon className="estudios-icon">
              <FaUniversity color={iconColor} />
            </Icon>
          </Row>
          <Row>
            <Title bgColor={backgroundColor}>Títulos Universitarios</Title>
            <Description bgColor={backgroundColor}>
              Médico y Cirujano Universidad de Antioquia 1990 - 1996.
            </Description>
          </Row>
        </Column>
        <Column>
          <Row>
            <Icon className="estudios-icon">
              <FcGraduationCap />
            </Icon>
          </Row>
          <Row>
            <Title bgColor={backgroundColor}>Posgrado</Title>
            <Description bgColor={backgroundColor}>
              Especialización en Otorrinolaringología 1997-2000.
            </Description>
          </Row>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Estudios;
