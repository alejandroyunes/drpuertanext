import { FC } from "react";
import Image from "next/image";
import { MdOutlinePhoneCallback } from "react-icons/md";
BsFillPhoneFill;
import { MdLocationOn } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiWaze } from "react-icons/si";
import {
  Wrapper,
  ColumnMaps,
  Title,
  Icon,
  Column,
  Row,
  Container,
  ColumnImage,
} from "./contactocomp.styled";

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
              <MdLocationOn color={iconColor} />
              <Title bgColor={backgroundColor}>
                Cl. 4 Sur #43a-195 - oficina 165
              </Title>
            </Icon>
          </Row>
          <Row>
            <Icon className="estudios-icon">
              <MdOutlinePhoneCallback color={iconColor} />
              <Title bgColor={backgroundColor}>Fijo: +6 04 268 5436</Title>
            </Icon>
          </Row>
          <Row>
            <Icon className="estudios-icon">
              <BsFillPhoneFill color={iconColor} />
              <Title bgColor={backgroundColor}>Cell: 318 898 1046</Title>
            </Icon>
          </Row>

          <ColumnMaps>
            <a
              className="map-link"
              href="https://goo.gl/maps/zHGEAqqYNnJKTPgs7"
            >
              <Icon className="map-icon">
                <FcGoogle size={40} color={iconColor} />
              </Icon>
              <Title className="title" bgColor={backgroundColor}>
                Ver en Google Maps
              </Title>
            </a>
            <a
              className="last-child map-link"
              href="https://waze.com/ul/hd34722b5f"
            >
              <Icon className="map-icon">
                <SiWaze size={40} color={iconColor} />
              </Icon>
              <Title className="title" bgColor={backgroundColor}>
                Ver en Waze
              </Title>
            </a>
          </ColumnMaps>

          <Row>
            <Title bgColor={backgroundColor}>¿Cómo llegar?</Title>
          </Row>
          <Row>
            <Title className="como-llegar" bgColor={backgroundColor}>
              Desde el occidente por el puente Gilberto Echeverry calzada
              izquierda ydesde carrera 43c en ambas direcciones hasta llegar a
              la calle 4 sur.
            </Title>
          </Row>
        </Column>

        <ColumnImage>
          <Image
            width={860}
            height={500}
            src={`/location-medium-zoom.jpg`}
            alt="Picture of the author"
          />
        </ColumnImage>
      </Container>
    </Wrapper>
  );
};

export default ContactoComponent;
