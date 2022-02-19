import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContacts, deleteContact, changeFilter };
