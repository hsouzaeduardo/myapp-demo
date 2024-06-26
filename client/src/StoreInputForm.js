import React, { useState } from 'react';

function StoreInputForm({ onSubmit, placeholder }) {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input type="text" className="form-control mb-2" value={text} onChange={handleInputChange} placeholder={placeholder} />
      <button type="submit" className="btn btn-success">Store Text</button>
    </form>
  );
}

export default StoreInputForm;
