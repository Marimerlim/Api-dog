import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as S from "./style";

export default function Dog() {
  const [dog, setDog] = useState();
  const [status, setStatus] = useState(false);

  //https://dog.ceo/dog-api/documentation/random
  const getDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      console.log(response.data.message);
      setDog(response.data.message);
      setStatus(true);
    });
  };

  return (
    <>
      <S.Title>
        <h1>Cachorrinhos para Relaxar</h1>
        <Link to="/">
          <p>Voltar</p>
        </Link>

        <button
          onClick={() => {
            getDog();
          }}
        >
          Começar
        </button>
      </S.Title>
      {status && <img src={dog} alt="cachorros" />}
    </>
  );
}
