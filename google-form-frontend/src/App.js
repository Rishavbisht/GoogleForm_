// src/App.js
import React, { useState } from 'react';
import FormSubmit from './components/FormSubmit';
import FormList from './components/FormList';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleFormSubmitted = () => {
    setRefresh(!refresh); // Toggle to trigger re-render
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Google Form RB</h1>
      <FormSubmit onFormSubmitted={handleFormSubmitted} />
      <hr />
      <FormList key={refresh} />
    </div>
  );
}

export default App;
