import React from 'react';
// import classNames from 'classname';
import Contact from '../Contact';
// import contactsActions from '../../redux/contacts/contacts-actions';

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul classNames="ContactList">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {/* {name}:{number}
          <button
            onClick={() => onDeleteContact(id)}
            type="button"
            className="deleteButton"
          >
            удалить
          </button> */}
          <Contact
            //отдаем в пропсах  name, number и метод onDelete
            name={name}
            number={number}
            onDelete={() => {
              onDeleteContact(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
