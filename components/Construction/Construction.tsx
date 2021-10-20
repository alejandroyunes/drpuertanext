import { useEffect, useState, FC } from "react";

import { Background, Column } from "./construction.styled";

const Construction: FC = () => {
  return (
    <>
      <Background>
        <div>
          <h3>En Construcci&oacute;n</h3>

          <p>
            Tel: +57 4 268 5436 – Cel: 318 898 1046 – Dir: Calle 4 sur #43 A 195
            oficina 165 – Centro Ejecutivo – Medellín Colombia
          </p>
        </div>
      </Background>
    </>
  );
};
export default Construction;
