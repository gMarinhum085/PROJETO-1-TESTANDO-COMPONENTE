// Button.jsx
import React, { useState } from 'react';

function Button({ text }) {
  const [label, setLabel] = useState(text);

  const handleClick = () => {
    setLabel('O carro está em movimento!');
  };

  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
