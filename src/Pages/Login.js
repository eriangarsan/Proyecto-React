import React, { useState } from 'react';
import usersData from '../users.json'
import '../assets/css//Login.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = usersData.find(
      (userData) => userData.username === username && userData.password === password
    );

    if (user) {
      alert('Inicio de sesión exitoso');
      setLoggedIn(true);
      setTimeout(() => {
        navigate('/clock');
      }, 1000);
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };
 



  return (
    <div className="Login">
      <h1>Iniciar sesión</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <div>
            <label>Contraseña:</label>
          </div>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <Footer/>
    </div>
  );
}

export default Login;
