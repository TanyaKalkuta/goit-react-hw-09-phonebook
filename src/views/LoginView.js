import React, { Component } from 'react';
import { connect } from 'react-redux';
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

// export default function LoginView() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = e => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = e => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     alert(email, password);
//   };

//   return (
//     <div className="LoginContainer">
//       <div className="LoginSection">
//         <h1 className="LoginTitle">Login</h1>
//         <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
//           <label style={styles.label}>
//             Почта
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </label>
//           <label style={styles.label}>
//             Пароль
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//           </label>
//           <Button type="submit" variant="contained">
//             Войти
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="LoginContainer">
        <div className="LoginSection">
          <h1 className="LoginTitle">Login</h1>
          <form
            onSubmit={this.handleSubmit}
            style={styles.form}
            autoComplete="off"
          >
            <label style={styles.label}>
              Почта
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
            <label style={styles.label}>
              Пароль
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
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
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
