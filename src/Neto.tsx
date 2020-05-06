import * as React from "react";

interface Props {
  empresaNome: string;

  onNomeMudou: (nome: string) => void;
}

function Neto(props: Props) {
  return (
    <React.Fragment>
      <div>
        <input
          type="text"
          value={props.empresaNome}
          onChange={ev => props.onNomeMudou(ev.target.value)}
        />
      </div>
      <h1>
        {props.empresaNome}
      </h1>
    </React.Fragment>
  );
}

export default Neto;
