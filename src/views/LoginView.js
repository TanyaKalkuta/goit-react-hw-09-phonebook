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

export default function LoginView() {
  const dispatch = useDispatch();

  const initialState = {
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

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(authOperations.logIn(state));
      setState({ name: '', email: '', password: '' });
    },
    [dispatch, state],
  );

  const { email, password } = state;
  return (
    <div className="LoginContainer">
      <div className="LoginSection">
        <h1 className="LoginTitle">Login</h1>
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
}

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };
//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className="LoginContainer">
//         <div className="LoginSection">
//           <h1 className="LoginTitle">Login</h1>
//           <form
//             onSubmit={this.handleSubmit}
//             style={styles.form}
//             autoComplete="off"
//           >
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
//               Войти
//             </Button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
