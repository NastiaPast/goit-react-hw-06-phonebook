import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { selectFilteredContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { MainTitle, SecondTitle, Container } from './App.styled';
export const App = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <Filter />
      <ContactList contacts={filteredContacts} />
    </Container>
  );
};
