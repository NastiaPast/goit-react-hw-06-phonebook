import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { List, Text, Button, Item } from './ContactList.styled';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Text>{contact.name}:</Text>
          <Text>{contact.number}</Text>
          <Button type="submit" onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
