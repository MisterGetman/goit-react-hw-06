import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contactsList, filterText, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contactsList
        .filter((e) => e.name.toLowerCase().includes(filterText.toLowerCase()))
        .map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
};

export default ContactList;
