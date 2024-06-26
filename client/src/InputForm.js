import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    // setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input type="text" className="form-control mb-2" value={text} onChange={handleInputChange} />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default InputForm;
