import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm"
import Filter from "./Filter"



export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    console.log(storedContacts);
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);



  const handleAddContact = (newContact) => {
    if (contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
  
  };
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);


  return (
    <div 
      style={{
        height: '101vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <h1>Contact List</h1>
    <ContactForm addContact={handleAddContact} contacts={contacts} />
<Filter value={filter} onChange={handleFilterChange} />
<ul>
{filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
</ul>
</div>
  );
};
