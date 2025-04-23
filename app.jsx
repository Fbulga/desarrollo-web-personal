import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <h1>Hello from React embedded in HTML 🎉</h1>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);