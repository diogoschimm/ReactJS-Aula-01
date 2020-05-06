import * as React from "react";
import Filho from "./Filho";

interface Props {
  empresaNome: string;
  onNomeMudou: (nome: string) => void;
}

function Pai(props: Props) {
  return (
    <React.Fragment>
     
      <Filho onNomeMudou={props.onNomeMudou} empresaNome={props.empresaNome} />
    </React.Fragment>
  );
}

export default Pai;
