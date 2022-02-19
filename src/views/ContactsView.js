import React from 'react';
import ContactsList from '../components/ContactsList';
import Container from '../components/Container';
import ContactsEditor from '../components/ContactEditor';
import ContactsFilter from '../components/ContactFilter/ContactsFilter';
export default function ContactsView() {
  return (
    <Container>
      <ContactsEditor />
      <ContactsList />
      <ContactsFilter />
    </Container>
  );
}
