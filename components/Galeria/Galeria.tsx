import { FC } from "react";
import Image from "next/image";
import { FaUniversity } from "react-icons/fa";

import { FcGraduationCap } from "react-icons/fc";
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
} from "./galeria.styled";

interface EstudioProps {
  bgColor?: string;
}

const Galeria: FC<EstudioProps> = ({ bgColor }) => {
  const backgroundColor = "white";
  const iconColor = "#37474F";
  return (
    <Wrapper bgColor={backgroundColor}>
      <Container bgColor={backgroundColor}>
        <Column>
          <Row>
             <img src="/location-medium-zoom.jpg" alt="" />
          </Row>
        </Column>
        <Column>
        <Row>
             <img src="/location-medium-zoom.jpg" alt="" />
        </Row>
        </Column>
      </Container>
      <Container bgColor={backgroundColor}>
        <Column>
        <Row>
             <img src="/location-medium-zoom.jpg" alt="" />
        </Row>
        </Column>
        <Column>
        <Row>
             <img src="/location-medium-zoom.jpg" alt="" />
        </Row>      
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Galeria;
