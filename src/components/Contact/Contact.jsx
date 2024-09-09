import css from "./Contact.module.css";
import { ImUser, ImPhone } from "react-icons/im";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactInfo}>
        <div className={css.textWrapper}>
          <ImUser className={css.icon} size="24" />
          <p>{contact.name}</p>
        </div>
        <div className={css.textWrapper}>
          <ImPhone className={css.icon} size="24" />
          <p>{contact.number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.deleteContactBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
