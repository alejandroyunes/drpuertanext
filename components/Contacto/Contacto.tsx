import { FC } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
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

const ContactoComponent: FC<EstudioProps> = ({ bgColor }) => {
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
            <Image
              width={150}
              height={60}
              src={`/logo-darker.png`}
              alt="Picture of the author"
            />
          </Row>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default ContactoComponent;
