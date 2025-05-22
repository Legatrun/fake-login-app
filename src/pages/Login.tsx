import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeLogin } from '../utils/fakeAuth';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fakeLogin(email, password);
    login(res.token);
    sessionStorage.setItem('token', res.token);
    navigate('/home');
  };

  return (
    <div className="login-wrapper">
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
