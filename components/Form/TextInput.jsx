import { StyledInput } from './index';
import { Label } from 'semantic-ui-react';
import React from 'react';

export default function TextInput(props) {
  return (
    <div>
      <Label color='red'>{props.name}</Label>
      <StyledInput
        name={props.name}
        placeholder={props.placeholder}
        type='text'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
