// src/components/FormSubmit.js
import React, { useState } from 'react';
import axios from 'axios';

const FormSubmit = ({ onFormSubmitted }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/form', {
        title,
        description,
      });
      setTitle('');
      setDescription('');
      onFormSubmitted(); // Notify parent to refresh the list
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Form</h2>
      <input
        type="text"
        placeholder="Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Form Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSubmit;
