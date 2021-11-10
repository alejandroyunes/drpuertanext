import { FC } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  Wrapper,
  Description,
  Title,
  Icon,
  Column,
  Container,
  Social,
} from "./footer.styled";

const Footer: FC = ({}) => {
  const backgroundColor = "white";
  const iconColor = "#37474F";
  return (
    <>
      <Wrapper bgColor={backgroundColor}>
        <Container bgColor={backgroundColor}>
          <Column>
            <Title className="home" bgColor={backgroundColor}>
              Nosotros
            </Title>
            <Description bgColor={backgroundColor}>
              El Dr. Puerta cuenta con más de 20 años de experiencia y más de
              5000 cirugías realizadas.
            </Description>
            <Title className="home" bgColor={backgroundColor}>
              Redes Sociales
            </Title>
            <Social>
              <Icon>
                <FaFacebookSquare size={35} color={iconColor} />
              </Icon>
              <Icon>
                <AiOutlineInstagram size={35} color={iconColor} />
              </Icon>
            </Social>
          </Column>
          <Column>
            <Title className="home" bgColor={backgroundColor}>
              Publicaciones
            </Title>
            <Description bgColor={backgroundColor}>
              Estudios publicados por el Dr. Puerta
            </Description>
          </Column>
          <Column>
            <Title className="home" bgColor={backgroundColor}>
              Links
            </Title>
            <Description bgColor={backgroundColor}>
              <ul>
                <li>Inicio</li>
                <li>Dr. Puerta</li>
                <li>Galería</li>
                <li>Estudios</li>
              </ul>
            </Description>
          </Column>
          <Column>
            <Title className="home" bgColor={backgroundColor}>
              Ubicación
            </Title>
            <Description bgColor={backgroundColor}>
              <ul>
                <li className="home-second">Contacto:</li>
                <li></li>
                <li>Fijo: +6 04 268 5436</li>
                <li>Cel: 318 898 1046.</li>
                <li className="home-second">Dirección</li>
                <li></li>
                <li>Calle 4 sur #43 A 195 oficina 165 – Medellín Colombia.</li>
              </ul>
            </Description>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
