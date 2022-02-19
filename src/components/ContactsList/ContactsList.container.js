import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactsList from './ContactsList';
const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allTodos.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
