import React from 'react';
import { Input, Label } from './styles';

const InputField = ({ label, name, type, placeholder, data, setData }) => {
  const handleInput = ({ currentTarget: input }) => {
    setData(input.value);
  };
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <br />
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={data}
        onInput={handleInput}
        required
      />
    </div>
  );
};

export default InputField;
