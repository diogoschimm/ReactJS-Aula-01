import * as React from "react";
import Row from "./Row";
import Pessoa from "../../model/Pessoa";

interface Props {
  dataSource: Pessoa[];
  onEdit: (pessoaOnEditing: Pessoa) => void;
  onRemove: (pessoa: Pessoa) => void;
}

class Grid extends React.Component<Props> {
  render() {
    const { dataSource } = this.props;

    return (
      <table className="margin table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Idade</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataSource.map((pessoa, index) =>
            <Row
              key={index}
              pessoa={pessoa}
              onRemove={this.props.onRemove}
              onEdit={this.props.onEdit}
            />
          )}
        </tbody>
      </table>
    );
  }
}

export default Grid;
