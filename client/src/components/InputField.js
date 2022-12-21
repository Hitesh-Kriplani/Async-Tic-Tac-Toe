import React, { useState } from 'react';
import { Input, Label } from './styles';

const InputField = ({ label, name, type, placeholder }) => {
  const [value, setValue] = useState('');
  const handleInput = (e) => {
    setValue(e.target.value);
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
        value={value}
        onInput={handleInput}
        required
      />
    </div>
  );
};

export default InputField;
