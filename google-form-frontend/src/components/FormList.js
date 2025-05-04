// src/components/FormList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormList = () => {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/form');
      setForms(res.data);
    } catch (error) {
      console.error('Error fetching forms:', error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div>
      <h2>All Forms</h2>
      <ul>
        {forms.map((form, index) => (
          <li key={index}>
            <strong>{form.title}</strong> — {form.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
