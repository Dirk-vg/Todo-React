import React from 'react';
import './List.css';

function List(props) {
    const removeItem = (index) => {
        props.setItems(props.items.filter((value, num) => num !== index));
      }; 

    return props.items.length > 0 ? (
        <ul className="List">
          {props.items.map((value, index) => (
            <li key={`item-${index}`}>
              {value} <span onClick={() => removeItem(index)}>(remove)</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="List">Everything is complete!</p>
      )
    

}

export default List;