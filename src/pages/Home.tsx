import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [items, setItems] = useState<any[]>([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/posts')
      .then(res => {
        const data = [...res.data];
        while (data.length < 2000) {
          data.push(...res.data);
        }
        setItems(data.slice(0, 2000));
      });
  }, []);

  const handleLogout = () => {
    logout();
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
   <div className="home-wrapper">
      <div className="home-header">
        <h1>Home</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ul className="home-list">
        {items.map((item, index) => (
          <li key={index}>  {item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
