import { useDispatch } from "react-redux";
import c from "./Contact.module.css";
import { removeContact } from "../../redux/contactsSlice";

function Contact({ data }) {
  const { name, number } = data; 
  const dispatch = useDispatch();
  return (
    <div className={c.wrapper}>
      <div className={c.infoWrapper}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={c.deleteBTN} onClick={() => dispatch(removeContact(data.id))}>Delete</button>
    </div>
  );
}

export default Contact;

