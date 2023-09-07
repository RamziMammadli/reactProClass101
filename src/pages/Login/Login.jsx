import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column' }}>
      <h2>Giriş Yap</h2>
      <form style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexDirection: 'column' }}>
        <div>
          <label>Kullanıcı Adı:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
