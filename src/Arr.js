import React, { useState } from 'react';

const Arr = () => {
  const [names, setNames] = useState(['srinu', 'raju', 'vishal', 'rahul']);
  const [checkedIndexes, setCheckedIndexes] = useState([]); // Array to track checked checkboxes

  function handleDelete(index) {
    const updatedNames = names.filter((_, vi) => vi !== index);
    setNames(updatedNames);
    setCheckedIndexes(checkedIndexes.filter(i => i !== index)); // Remove from checkedIndexes when deleted
  }

  const toggleCheckbox = (index) => {
    if (checkedIndexes.includes(index)) {
      setCheckedIndexes(checkedIndexes.filter(i => i !== index));
    } else {
      setCheckedIndexes([...checkedIndexes, index]);
    }
  };

  return (
    <div>
      {names.map((name, i) => (
        <p key={i}>
          <input
            type='checkbox'
            checked={checkedIndexes.includes(i)}
            onChange={() => toggleCheckbox(i)}
          />
          {name} {checkedIndexes.includes(i) && <button onClick={() => handleDelete(i)}>delete</button>}
        </p>
      ))}
    </div>
  );
}

export default Arr;



