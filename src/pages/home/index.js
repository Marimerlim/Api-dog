import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Style";

export default function Home() {
  return (
    <S.Header>
      <h1>SPAtas</h1>

      <Link to="/dog-page">
        <p>Clique aqui para Relaxar</p>
      </Link>
    </S.Header>
  );
}
