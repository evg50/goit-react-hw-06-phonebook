import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import ContactsList from './ContactsList';

const mapStateToProps = ({ contacts: { items } }) => ({
  contacts: items,
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
