import React, { useCallback } from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-action';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  // что бы onChange не ререндилась каждый раз, можно делать через useCallback
  // const onChange = e => dispatch(changeFilter(e.target.value));
  const onChange = useCallback(
    e => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch],
  );

  return (
    <label className={styles.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
}
