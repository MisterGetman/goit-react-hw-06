import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initiaContactList from "./data.json";
import "./App.css";

function App() {
  const [contactsList, setContactsList] = useState(
    JSON.parse(window.localStorage.getItem("phonebook")) || initiaContactList
  );
  const [filterText, setFilterText] = useState("");

  const addContact = (newContact) => {
    const newList = [newContact, ...contactsList];
    setContactsList(newList);
    window.localStorage.setItem("phonebook", JSON.stringify(newList));
  };

  const deleteContact = (contactId) => {
    const newList = contactsList.filter((contact) => contact.id !== contactId);
    setContactsList(newList);
    window.localStorage.setItem("phonebook", JSON.stringify(newList));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterText={filterText} setFilterText={setFilterText} />
      <ContactList
        contactsList={contactsList}
        filterText={filterText}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
