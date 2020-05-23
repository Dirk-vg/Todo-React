import React, { useState } from "react";

function Form(props) {
  const [item, setItem] = useState("");

  const addItem = () => {
    props.setItems([...props.items, item]);
    setItem("");
  };
  return (
    <div>
      <input
        value={item}
        onChange={(event) => setItem(event.target.value)}
        type='Text'
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default Form;
