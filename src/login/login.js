import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);
  const handleFormSubmit = (event) => {
    console.log('submit');
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
    setIsLogged(true);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </label>
        <br />
        <br />
        <button type="submit">Iniciar Sesion</button>
      </form>
      {isLogged && <h2>Logeado exitosamente</h2>}
    </div>
  );
}

export default Login;
