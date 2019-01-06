import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

interface IProps {
  onClick: (event: any) => void;
};

class InputButton extends Component<IProps> {
  private input: any;

  constructor(props: IProps) {
    super(props);
    this.input = React.createRef<HTMLInputElement>();
  }

  onAdd = () => {
    const input = this.input.current;
    const item = {
      key: input.value,
      label: input.value,
    };
    
    this.props.onClick(item);

    // empty input again.
    input.value = "";

    // focus on the input element.
    input.focus();
  }

  handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      this.onAdd();
    }
  }

  render() {
    return (
      <Wrapper>
        <Input ref={this.input} onKeyPress={this.handleKeyPress} />
        <Button onClick={this.onAdd}>Add</Button>
      </Wrapper>
    )
  }
}

export default InputButton;
