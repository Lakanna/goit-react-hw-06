import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redux/contactsSlice";

export default function ContactList({ onDelete }) {
  const contacts = useSelector(getContacts);
  console.log(contacts, "contacts in contacts list");

  return (
    <>
      {contacts.map((contact) => {
        return (
          <Contact contact={contact} key={contact.id} onDelete={onDelete} />
        );
      })}
    </>
  );
}
