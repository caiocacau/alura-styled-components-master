import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { Icone, Box, Botao, Saldo, Detalhe, IconeTema } from "../UI";

const IconeMargin = styled(Icone)`
  marginTop: "2px";
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        <Saldo>
          <Detalhe>R$</Detalhe>
          {toggleState ? (<div style={{ float: "left", padding: "0 10px" }}>0,00{" "}</div>) : (<div style={{ float: "left", marginTop: "8px", padding: "0 20px" }}>****{" "}</div>)}
        </Saldo>
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
