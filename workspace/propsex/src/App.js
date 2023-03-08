import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>

    
  );
}

export default App;
