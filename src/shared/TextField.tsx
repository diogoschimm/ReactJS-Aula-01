import * as React from "react";

interface Props {
  label: string;
  placeholder?: string;
  value: string;
  number?: boolean;
  onChange: (value: string | number) => void;
}

class TextField extends React.Component<Props> {
  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    if (this.props.number) {
      this.handleNumberChange(value);
    } else {
      this.handleTextChange(value);
    }
  };

  handleTextChange(value: string) {
    this.props.onChange(value);
  }

  handleNumberChange(value: string) {
    const number = +value;
    console.log(value);
    if (isNaN(number)) return;

    this.props.onChange(number);
  }

  render() {
    const { label, placeholder, value } = this.props;

    return (
      <div className="form-group">
        <label>
          {label}
        </label>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder={placeholder}
          className="form-control"
        />
      </div>
    );
  }
}

export default TextField;
