import React from 'react';

export default function Contact({ name, number, id, onDelete }) {
  console.log('id', id);
  return (
    <>
      {name}:{number}
      <button onClick={onDelete} type="button" className="deleteButton">
        удалить
      </button>
    </>
  );
}
//
