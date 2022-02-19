import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

function ContactsFilter({ value, onChange }) {
  return (
    <div className="ContactsFilter">
      <p className="ContactsFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="ContactsFilter__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsFilter);
