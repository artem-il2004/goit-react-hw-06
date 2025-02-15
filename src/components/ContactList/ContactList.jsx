import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"; 
import c from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter);
const filteredContacts = contacts.filter(item => 
    item.name.toLowerCase().includes(filter.toLowerCase()) || 
    item.number.includes(filter)
);



  return (
    <ul className={c.wrapper}>
      {
        filteredContacts.length === 0
          ? (<p>There is no contacts</p>)
          : filteredContacts.map(contact => {
              return (
                <li key={contact.id}>
                  <Contact data={contact} />
                </li>
              );
            })
      }
    </ul>
  );
}

export default ContactList;
