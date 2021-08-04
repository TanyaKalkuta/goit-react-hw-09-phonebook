import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import ElementContactList from '../ElementContactList/ElementContactList';
import styles from './ContactList.module.css';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import {
  getLoading,
  getVisibleContacts,
} from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  //   componentDidMount() {
  //     this.props.onfetchContacts();
  //   }
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);
  const isLoadingContacts = useSelector(getLoading);
  // const mapStateToProps = state => ({
  //   contacts: getVisibleContacts(state),
  //   isLoadingContacts: getLoading(state),
  // });

  // const mapDispatchToProps = dispatch => ({
  //   onClick: id => dispatch(deleteContact(id)),
  //   onfetchContacts: () => dispatch(fetchContacts()),  // });

  return (
    <>
      {isLoadingContacts && <h1>....Загружаем</h1>}

      <ul className={styles.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contact_item}>
            <ElementContactList name={name} number={number} />
            <button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              className={styles.item_button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// class ContactList extends Component {
//   componentDidMount() {
//     this.props.onfetchContacts();
//   }

//   render() {
//     return (
//       <>
//         {this.props.isLoadingContacts && <h1>....Загружаем</h1>}

//         <ul className={styles.contact_list}>
//           {this.props.contacts.map(({ id, name, number }) => (
//             <li key={id} className={styles.contact_item}>
//               <ElementContactList name={name} number={number} />
//               <button
//                 type="button"
//                 onClick={() => {
//                   this.props.onClick(id);
//                 }}
//                 className={styles.item_button}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: getVisibleContacts(state),
//   isLoadingContacts: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onClick: id => dispatch(deleteContact(id)),
//   onfetchContacts: () => dispatch(fetchContacts()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
