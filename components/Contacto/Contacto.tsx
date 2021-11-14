import { FC } from "react";
import { FaLocationArrow } from "react-icons/fa";

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

const Contacto: FC<EstudioProps> = ({ bgColor }) => {
  const backgroundColor = "white";
  const iconColor = "#37474F";
  return (
    <Wrapper bgColor={backgroundColor}>
      <Container bgColor={backgroundColor}>
        <Column>
          <Row>
            <Icon className="estudios-icon">
              <FaLocationArrow color={iconColor} />{" "}
            </Icon>
            <Title bgColor={backgroundColor}>Títulos Universitarios</Title>
          </Row>
          <Row>
            <Description bgColor={backgroundColor}>
              Médico y Cirujano Universidad de Antioquia 1990 - 1996.
            </Description>
          </Row>
        </Column>
        <Column>
          <Row>
            <Icon className="estudios-icon">
              <FaLocationArrow />
            </Icon>
          </Row>
          <Row>
            <Title bgColor={backgroundColor}>Posgrado</Title>
            <Description bgColor={backgroundColor}>
              Especialización en Otorrinolaringología
            </Description>
          </Row>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Contacto;
