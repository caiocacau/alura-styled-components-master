import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

// import { Icone, Box, Botao, Saldo, Detalhe, IconeTema } from "../UI";

import * as S from "../UI";

const IconeMargin = styled(S.Icone)`
  marginTop: "2px";
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <S.Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <S.IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        <S.Saldo>
          <S.Detalhe>R$</S.Detalhe>
          {toggleState ? (<div style={{ float: "left", padding: "0 10px" }}>0,00{" "}</div>) : (<div style={{ float: "left", marginTop: "8px", padding: "0 20px" }}>****{" "}</div>)}
        </S.Saldo>
      </div>

      <S.Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </S.Botao>
    </S.Box>
  );
};

export default Conta;
