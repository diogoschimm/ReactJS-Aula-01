import * as React from "react";
import "./App.css";
import Grid from "./cadastro/Grid";
import Form from "./cadastro/Form";
import Pessoa from "./model/Pessoa";

interface State {
  pessoas: Pessoa[];
  pessoaOnEditing?: Pessoa;
}

class App extends React.PureComponent<{}, State> {
  identity = 3; //starts on 3 step 1

  state: State = {
    pessoas: [
      { id: 1, nome: "Luan", email: "luan.castro@nuvem.net", idade: 19 },
      { id: 2, nome: "Gui", email: "gui@senai.com", idade: 29 }
    ]
  };

  handleCancel = () => {
    this.setState({ pessoaOnEditing: undefined });
  };

  handleAdd = (pessoa: Pessoa) => {
    let pessoas = this.state.pessoas;

    pessoa.id = this.identity++;

    pessoas = pessoas.concat(pessoa);

    this.setState({ pessoas });
  };

  handleEdit = (pessoa: Pessoa) => {
    let pessoas = this.state.pessoas;

    pessoas = pessoas.map(p => {
      if (p.id != pessoa.id) return p;
      return pessoa;
    });

    this.setState({ pessoas });
  };

  handleRemove = (pessoa: Pessoa) => {
    let pessoas = this.state.pessoas;

    pessoas = pessoas.filter(p => p.id != pessoa.id);

    this.setState({ pessoas });
  };

  render() {
    const { pessoas, pessoaOnEditing } = this.state;

    return (
      <div className="continer">
        <Form
          pessoaOnEditing={pessoaOnEditing}
          onEdit={this.handleEdit}
          onAdd={this.handleAdd}
          onCancel={this.handleCancel}
        />
        <Grid
          dataSource={pessoas}
          onEdit={pessoaOnEditing => this.setState({ pessoaOnEditing })}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
