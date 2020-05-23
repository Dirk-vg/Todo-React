import React, { useState } from "react";
import "./App.css";

import List from './components/List';
import Form from './components/Form';

function App() {
  const [items, setItems] = useState([`Learn JavaScript`]);
  
  return (
    <div className='App'>
      <List items={items} setItems={setItems}/>
      <Form items={items} setItems={setItems}/>
      
    </div>
  );
}

export default App;
