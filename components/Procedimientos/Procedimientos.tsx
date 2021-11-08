import { FC } from "react";

import { GiNoseSide } from "react-icons/gi";
import { GiNoseFront } from "react-icons/gi";
import {
  Wrapper,
  Description,
  Title,
  Icon,
  Column,
  Container,
} from "./prodecimientos.styled";

interface EstudioProps {
  bgColor?: string;
}

const Procedimientos: FC<EstudioProps> = ({ bgColor }) => {
  const backgroundColor = "white";
  const iconColor = "#37474F";
  return (
    <>
      <Wrapper bgColor={backgroundColor}>
        <Container bgColor={backgroundColor}>
          <Column>
            <Icon>
              <GiNoseFront size={80} color={iconColor} />
            </Icon>
            <Title bgColor={backgroundColor}>Rinoplastia</Title>
            <Description bgColor={backgroundColor}>
              La rinoplastia es uno de los procedimientos técnicamente más
              difíciles entre las cirugía cosméticas. Requiere un alto sentido
              de estética asociado a un gran conocimiento de la anatomía para
              alcanzar un resultado agradable, natural y conservando.
            </Description>
          </Column>
          <Column>
            <Icon>
              <GiNoseSide size={80} color={iconColor} />
            </Icon>
            <Title bgColor={backgroundColor}>Rinoplastia Secundaria</Title>
            <Description bgColor={backgroundColor}>
              La Rinoplastia secundaria o rinoplastia de revisión requiere una
              habilidad quirúrgica excepcional y una gran capacidad de análisis.
              Solo cirujanos con un gran entrenamiento y una basta experiencia
              en cirugía nasal pueden mejorar la función respiratoria y los
              resultados no deseados de una cirugía nasal previa.
            </Description>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default Procedimientos;
