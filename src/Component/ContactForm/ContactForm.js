import React, { useState, useCallback } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-operations';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });
export default function ContactForm() {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (name, number) => {
      dispatch(addContact(name, number));
    },
    [dispatch],
  );
  const initialState = {
    name: '',
    number: '',
  };
  const [state, setState] = useState(initialState);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  /** Отвечает за обновление состояния*/
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  /** Вызывается при отправке формы */
  // Проп который передается форме для вызова при сабмите

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = state;
    if (name === '' && number === '') {
      return alert('Please fill empty fields');
    }
    onSubmit(name, number);
    reset();
    return;
  };

  const reset = () => {
    setState({ name: '', number: '' });
  };

  const { name, number } = state;

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contacts_form}>
        <div>
          <label htmlFor={nameInputId} className={styles.label}>
            Name
            <input
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleChange}
              id={nameInputId}
              className={styles.input}
            />
          </label>
        </div>
        <div>
          <label htmlFor={numberInputId} className={styles.label}>
            Number
            <input
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={handleChange}
              id={numberInputId}
              className={styles.input}
            />
          </label>
        </div>

        <button type="submit" className={styles.form_button}>
          Add contact
        </button>
      </form>
    </>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = uuidv4();
//   numberInputId = uuidv4();

//   /** Отвечает за обновление состояния*/
//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };
//   /** Вызывается при отправке формы */
//   // Проп который передается форме для вызова при сабмите

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     if (name !== '' && number !== '') {
//       this.props.onSubmit(name, number);
//       this.reset();
//       return;
//     }
//     alert('Please fill empty fields');
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className={styles.contacts_form}>
//           <div>
//             <label htmlFor={this.nameInputId} className={styles.label}>
//               Name
//               <input
//                 type="text"
//                 value={name}
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                 required
//                 onChange={this.handleChange}
//                 id={this.nameInputId}
//                 className={styles.input}
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor={this.numberInputId} className={styles.label}>
//               Number
//               <input
//                 type="tel"
//                 value={number}
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                 required
//                 onChange={this.handleChange}
//                 id={this.numberInputId}
//                 className={styles.input}
//               />
//             </label>
//           </div>

//           <button type="submit" className={styles.form_button}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(addContact(name, number)),
// });
// export default connect(null, mapDispatchToProps)(ContactForm);
