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
              Médico y Cirujano, especialista en Otorrinolaringología de la
              Universidad de Antioquia.
            </Description>
            <Title className="home" bgColor={backgroundColor}>
              Redes Sociales
            </Title>
            <Social>
              <Icon>
                <FaFacebookSquare size={35} color={iconColor} />
              </Icon>
              <Icon>
                <a
                  target="_blank"
                  href="https://www.instagram.com/cirugiafacial_jorgepuerta/"
                >
                  <AiOutlineInstagram size={35} color={iconColor} />
                </a>
              </Icon>
            </Social>
          </Column>
          <Column>
            <Title className="home" bgColor={backgroundColor}>
              Publicaciones
            </Title>
            <Description bgColor={backgroundColor}>
              <a href="/estudios.pdf"> Estudio publicados por el Dr. Puerta</a>
            </Description>
          </Column>
          <Column>
            <Title className="home" bgColor={backgroundColor}>
              Links
            </Title>
            <Description bgColor={backgroundColor}>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/drpuerta">Dr. Puerta</a>
                </li>
                <li>
                  <a href="/galeria">Galería</a>
                </li>
                <li>
                  <a href="/estudio.pdf" target="_blank">
                    Estudio
                  </a>
                </li>
                <li>
                  <a href="/contacto">Contacto</a>
                </li>
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
                <li>Cl. 4 Sur #43a-195 oficina 165 – Medellín - Colombia.</li>
              </ul>
            </Description>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
