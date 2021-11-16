import { FC } from "react";

BsFillPhoneFill;

import { BsFillPhoneFill } from "react-icons/bs";

import TitleComponent from "components/Title/Title";
import {
  Wrapper,
  Title,
  Column,
  Row,
  Container,
  Description,
} from "./drpuerta.styled";

interface EstudioProps {
  bgColor?: string;
}

const DrPuerta: FC<EstudioProps> = ({ bgColor }) => {
  const backgroundColor = "white";
  const iconColor = "#37474F";
  return (
    <Wrapper bgColor={backgroundColor}>
      <TitleComponent
        title={"Dr. Jorge Puerta"}
        message={`Médico y Cirujano, especialista en Otorrinolaringología de la Universidad de Antioquia.`}
        backgroundColor={"light"}
      />
      <Container bgColor={backgroundColor}>
        <Column>
          <Row>
            <Title bgColor={backgroundColor}>Estudios Universitarios</Title>
            <Description>
              Médico y Cirujano Universidad de Antioquia 1990 - 1996
            </Description>
          </Row>

          <Row>
            <Title>Estudios de Posgrado</Title>
            <Description>
              Especialización en Otorrinolaringología 1997 - 2000.
            </Description>
            <Description>
              Visiting Colleague en Cirugía Plástica Facial y Reconstructiva,
              Departamento de Otorrinolaringología Massachussets Eye and Ear
              Infirmary, Harvard Medical School, Boston MA, USA.
            </Description>
            <Description>
              Diplomatura en finanzas Universidad EAFIT, Medellín, 2003.
            </Description>
            <Description>
              Diplomado de Gestión en Salud. Universidad de la Sabana, 2004.
            </Description>
            <Description>
              Diplomado en Docencia Universitaria, Universidad de Antioquia,
              2007.
            </Description>
          </Row>
          <Row>
            <Title>Áreas Mayores de Investigaciones</Title>
            <Description>Cirugía Plástica Facial.</Description>
            <Description>Ingeniería de Tejidos.</Description>
          </Row>
          <Row>
            <Title>Sociedades Científicas</Title>
            <Description>
              Miembro de la Asociación Colombiana de Otorrinolaringología y
              Cirugía de Cabeza y Cuello, Maxilofacial y Estética Facial.
            </Description>
            <Description>
              Miembro de la Sociedad Colombiana de Cirugía Plástica Facial y
              Rinología.
            </Description>
            <Description>
              Grupo de Ingeniería de Tejidos Facultad de Medicina Universidad de
              Antioquia.
            </Description>
          </Row>
          <Row>
            <Title>Experiencia Universitaria</Title>
            <Description>
              Jefe de Sección de Otorrinolaringología y Cirugía de Cabeza y
              Cuello. Facultada de Medicina Universidad de Antioquia. 2008 -
              2018.
            </Description>
            <Description>
              Docente de Postgrado en Otorrinolaringología y Cirugía de Cabeza y
              Cuello. Facultad de Medicina Universidad de Antioquia. Técnica
              Quirúrgica-Cirugía Plástica Facial I y II. 2005 - 2018.
            </Description>
            <Description>
              Docente de pre-grado en Medicina. Cátedra de Otorrinolaringología.
              Rinología y Cirugía de Nariz. Facultad de Medicina Universidad
              Pontificia Bolivariana. 2001 a la fecha
            </Description>
            <Description>
              Docente de Postgrado en Cirugía Maxilofacial Universidad de
              Antioquia. Staff de Cirugía Ortognática-Cirugía Estética
              Maxilofacial 2005 - 2007.
            </Description>
          </Row>
        </Column>
        <Column>
          <Row>
            <Title>Investigaciones, Ponencias y Publicaciones</Title>
            <Description>
              Trasplante de Médula Ósea en Ratas pos Irradiación Corporal Total
              Estudio Experimental facultad de Medicina U de A 1992 - 1993.
            </Description>
            <Description>
              Manejo de la Estenosis Laringotraqueal en Adultos, Experiencia en
              el Hospital Universitario San Vicente de Paúl Medellín, Curso de
              Instrucción, XXX Congreso de Otorrinolaringología y Cirugía de
              Cabeza y Cuello. San Andrés Isla, Colombia Junio de 2000.
            </Description>
            <Description>
              Traqueostomía Percutánea por Dilatación: experiencia con 30
              pacientes electivos en unidad de cuidados intensivos (uci).
              Revista colombiana de anestesiología volumen 30 (2002), edición 4.
            </Description>
            <Description>
              Expositor en las Jornadas Académicas Sábados del Hospital,
              Hospital Universitario San Vicente de Paúl, Urgencias Quirúrgicas
              en Otorrinolaringología Pediátrica, Medellín 17 de Mayo de 2003.
            </Description>
            <Description>
              Etiología Bacteriana del Absceso Periamigdalino en el Hospital
              Universitario San Vicente de Paúl Medellín Antioquia Colombia 1998
              – 2000, presentado en el XXXII Congreso Nacional de
              Otorrinolaringología, Cartagena, Mayo de 2004.
            </Description>
            <Description>
              Experiencia en el Manejo de Fístulas Nasales de líquido
              Cefalorraquídeo en el Hospital Universitario San Vicente de Paúl
              Medellín, presentado en el XXXII Congreso Nacional de
              Otorrinolaringología, Cartagena, Mayo de 2004. Publicado en el
              Acta de Otorrinolaringología & Cirugía de Cabeza y Cuello Volumen
              32, número 2, junio de 2004.
            </Description>
            <Description>
              Capítulo de Urgencias en Otorrinolaringología Infantil del Manual
              de Urgencias de Pediatría del Hospital Universitario San Vicente
              de Paúl, Medellín, noviembre de 2004.
            </Description>
            <Description>
              Expositor en el Curso de Urgencias de Otorrinolaringología y
              Oftalmología del Hospital San Vicente de Paúl, Conferencia
              Urgencias de la Vía Aérea, junio de 2006 Medellín.
            </Description>
            <Description>
              Experiencia con la Técnica Macs en Ritidoplastia Mínimamente
              Invasiva, presentado en el XII congreso de Cirugía Plástica Facial
              y Rinología, Bogotá, marzo de 2007. Premio 2 lugar Concurso Mejor
              Trabajo en Cirugía Plástica Facial. Publicado en el Acta de
              Otorrinolaringología & Cirugía de Cabeza y Cuello Volumen 35,
              número 4, diciembre de 2007.
            </Description>
            <Description>
              Terapia Celular Autóloga para el Manejo de Ritides Faciales.
              Presentado en el XII Congreso nacional de cirugía Plástica Facial
              y Rinologia. Premio al mejor trabajo de investigación en cirugía
              plástica facial y rinología. Marzo de 2007.
            </Description>
            <Description>
              Transplante de cara en modelo murino- Técnica microvascular.
              Presentado en el XXXIV Congreso Nacional de Otorrinolaringología,
              Cirugía de Cabeza y Cuello, maxilofacial y Estética Facial.
              Medellín, Mayo de 2008.
            </Description>
            <Description>
              Rinoplastia en pacientes con nariz Leporina con injertos
              Aloplásticos. Presentado en el XXXIV Congreso Nacional de
              Otorrinolaringología, Cirugía de Cabeza y Cuello, maxilofacial y
              Estética Facial. Medellín, Mayo de 2008.
            </Description>
            <Description>
              Transplante de Cara Experimental Técnica Microvascular Modelo
              Docente de Microcirugía en Cabeza y Cuello. Premio al Mejor
              Trabajo de Investigación en Cirugía plástica Facial Marzo 2009.
              Presentado en el XIII Congreso Nacional de Cirugía plástica
              Facial. Medellín, Marzo de 2008.
            </Description>
            <Title>Otros Cursos y Actualizaciones</Title>
            <Description>
              Curso Internacional Otorrinolaringología, Santa fe de Bogotá, Mayo
              de 1999.
            </Description>
            <Description>
              Curso Avanzado de Laringología y Fonolaringología, Medellín,
              Noviembre de 1999.
            </Description>
            <Description>
              XXX Congreso Nacional de Otorrinolaringología, San Andrés Isla,
              Mayo -Junio del 2000.
            </Description>
            <Description>
              XXXI Congreso Nacional de Otorrinolaringología, Santa Marta, en
              junio de 2002.
            </Description>
            <Description>
              X Congreso Nacional de Cirugía Plástica Facial y Rinología,
              Cartagena, Octubre 2 al 5 de 2003.
            </Description>
            <Description>
              XXXII Congreso Nacional de Otorrinolaringología, Cartagena, Mayo
              de 2004.
            </Description>
            <Description>
              Curso Latinoamericano para el Diagnóstico y Tratamiento de las
              Alergias, Medellín, Septiembre de 2004.
            </Description>
            <Description>
              Simposio Internacional de Cirugía Plástica. Curso de Instrucción:
              Técnica MACS suspensión Craneofacial-Hilos Tensores Faciales,
              Cali, Octubre de 2004.
            </Description>
            <Description>
              Diplomado Internacional Antiaging: Botox y Rellenos faciales,
              Buenos Aires, Argentina, Abril de 2005.
            </Description>
            <Description>
              XI Congreso Nacional de Cirugía Plástica Facial y Rinología,
              Cartagena, Mayo 14 al 17 de 2005.
            </Description>
            <Description>
              XXXIII Congreso Nacional de Otorrinolaringología, Santiago de
              Cali, Mayo de 2006.
            </Description>
            <Description>
              XII Congreso Nacional de Cirugía Plástica Facial y Rinología,
              Bogotá, Marzo de 2007.
            </Description>
            <Description>
              Curso Internacional Innovaciones en Otorrinolaringología, Bogotá
              Septiembre de 2007.
            </Description>
            <Description>
              Curso de Rinología Estado del Arte. Medellín, Octubre de 2007.
            </Description>
            <Description>
              Curso de Entrenamiento en Microcirugía. NewYork-Presbyterian
              Hospital, Columbia University. New York, USA, Noviembre de 2007.
            </Description>
            <Description>
              Diplomado en Oculoplastia y Frontoplastia, Medellín, Enero a Marzo
              de 2008.
            </Description>
            <Description>
              Diplomado en Ritidoplastia y Cirugía Plástica Facial, Medellín,
              Abril a Julio de 2008.
            </Description>
            <Description>
              Curso el Arte del Rejuvenecimiento: Botox y Surgiderm, Medellín,
              Julio de 2008.
            </Description>
            <Description>
              Diplomado en Corrección de Cicatrices y Colgajos faciales,
              Medellín, Noviembre de 2008.
            </Description>
          </Row>
        </Column>
      </Container>
    </Wrapper>
  );
};

export default DrPuerta;
