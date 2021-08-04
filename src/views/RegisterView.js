import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import './Views.css';
import { Button } from '@material-ui/core';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'Flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState);

  const handleChange = useCallback(e => {
    const { name, value } = e.currentTarget;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register(state));
    setState({ name: '', email: '', password: '' });
  };

  const { name, email, password } = state;

  return (
    <div className="RegisterContainer">
      <div className="RegisterSection">
        <h1 className="RegisterTitle">Registration</h1>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <Button type="submit" variant="contained">
            Зарегистрироваться
          </Button>
        </form>
      </div>
    </div>
  );
}

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// class RegisterView extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { name, email, password } = this.state;

//     return (
//       <div className="RegisterContainer">
//         <div className="RegisterSection">
//           <h1 className="RegisterTitle">Registration</h1>
//           <form
//             onSubmit={this.handleSubmit}
//             style={styles.form}
//             autoComplete="off"
//           >
//             <label style={styles.label}>
//               Имя
//               <input
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <label style={styles.label}>
//               Почта
//               <input
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <label style={styles.label}>
//               Пароль
//               <input
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={this.handleChange}
//               />
//             </label>
//             <Button type="submit" variant="contained">
//               Зарегистрироваться
//             </Button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// // const mapDispatchToProps = {
// //   onRegister: authOperations.register,
// // };
// //то же самое, что:
// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(authOperations.register(data)),
// });

// export default connect(null, mapDispatchToProps)(RegisterView);
