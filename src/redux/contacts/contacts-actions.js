import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContacts = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContacts, deleteContacts, changeFilter };
