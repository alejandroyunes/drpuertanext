import { FC } from "react";

import { Wrapper, Column, Row, Container } from "./images.styled";

const ImagesYvideos: FC = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Column>
            <Row>
              <p>hola laura</p>
            </Row>
            <Row>
              <p>videos</p>
            </Row>
          </Column>
        </Container>
      </Wrapper>
    </>
  );
};

export default ImagesYvideos;
