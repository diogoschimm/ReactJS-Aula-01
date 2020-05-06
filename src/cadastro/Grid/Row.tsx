import * as React from "react";
import Pessoa from "../../model/Pessoa";

interface Props {
  pessoa: Pessoa;
  onEdit: (pessoaOnEditing: Pessoa) => void;
  onRemove: (pessoa: Pessoa) => void;
}

function Row(props: Props) {
  const { pessoa } = props;

  return (
    <tr>
       <td>
        {pessoa.id}
      </td>
      <td>
        {pessoa.nome}
      </td>
      <td>
        {pessoa.email}
      </td>
      <td>
        {pessoa.idade} Anos
      </td>
      <td style={{ width: "180px" }}>
        <button
          onClick={() => props.onEdit(pessoa)}
          className="btn btn-primary btn-margin"
        >
          [E]
        </button>
        <button
          onClick={() => props.onRemove(pessoa)}
          className="btn btn-danger btn-margin"
        >
          [X]
        </button>
      </td>
    </tr>
  );
}

export default Row;
