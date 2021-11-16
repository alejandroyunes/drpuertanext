import { FC } from "react";

import { Background, BackgroundTop, Text } from "./construction.styled";
import Image from "next/image";

const Construction: FC = () => {
  return (
    <>
      <BackgroundTop>
        <Image
          width={250}
          height={100}
          src={"/logo-darker.png"}
          alt="Picture of the author"
        />
      </BackgroundTop>
      <Background>
        <Text>
          <p>Tel: +57 4 268 5436 – Cel: 318 898 1046</p>
          <p>Dir: Calle 4 sur #43 A 195 oficina 165</p>
          <p>Centro Ejecutivo – Medellín, Colombia</p>
          <h3>Galería En Construcci&oacute;n</h3>
        </Text>
      </Background>
    </>
  );
};
export default Construction;
