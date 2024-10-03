// components/DraggableList.js
import React, { useState } from 'react';

const initialItems = [
  { id: '1', content: 'First Item' },
  { id: '2', content: 'Second Item' },
  { id: '3', content: 'Third Item' }
];

function DraggableList() {
  const [items, setItems] = useState(initialItems);

  const onDragOver = (event) => {
    event.preventDefault(); // Necessary for allowing to drop
  };

  const onDragStart = (event, fromIndex) => {
    event.dataTransfer.setData("fromIndex", fromIndex);
  };

  const onDrop = (event, toIndex) => {
    const fromIndex = event.dataTransfer.getData("fromIndex");
    const itemMoving = items[fromIndex];

    const updatedItems = [...items];
    updatedItems.splice(fromIndex, 1); // Remove the item from its original position
    updatedItems.splice(toIndex, 0, itemMoving); // Insert the item at its new position

    setItems(updatedItems);
  };

  return (
    <div className="bg-white shadow rounded p-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={(event) => onDragStart(event, index)}
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, index)}
          className="p-2 cursor-pointer bg-gray-100 rounded my-2"
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}

export default DraggableList;
