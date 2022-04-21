import { FC } from "react";

import { Wrapper, Column, Row, Container } from "./images.styled";
import _Button from "components/Button/Button";

const ImagesYvideos: FC = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Column>
            <Row>
              <_Button
                buttonText={"fotos"}
                link={"/estudio.pdf"}
                externalLink={true}
              ></_Button>
            </Row>
            <Row>
              <_Button
                buttonText={"videos"}
                link={"/estudio.pdf"}
                externalLink={true}
              ></_Button>
            </Row>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default ImagesYvideos;
