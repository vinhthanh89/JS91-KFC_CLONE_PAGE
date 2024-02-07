import React, { useState } from 'react';
import './LogPage.css';

const usersData = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const AuthForm = ({ formType, onAuth, onToggleForm, onShowForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = () => {
    const user = usersData.find((user) => user.username === username && user.password === password);

    if (user) {
      onAuth(username);
    } else {
      alert('Tài khoản chưa chính xác!');
    }
  };

  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSignUp = () => {
    const existingUser = usersData.find((user) => user.username === username);

    if (existingUser) {
      alert('Tài khoản đã tồn tại. Bạn hãy chọn tên tài khoản khác nhé!');
    } else if (password !== verifyPassword) {
      alert('Mật khẩu không khớp. Bạn hãy nhập lại nhé!');
    } else {
      usersData.push({ username, password });
      onAuth(username);
    }
  };

  return (
    <div className="auth-container">
      <h2>{formType === 'login' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}</h2>
      <div>
        <label>Tên tài khoản:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className={`password-toggle ${showPassword ? 'visible' : ''}`}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>
      <div>
        <label>Nhập lại mật khẩu:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
        />
      </div>
      <button onClick={formType === 'login' ? handleAuth : handleSignUp}>
        {formType === 'login' ? 'Login' : 'Sign Up'}
      </button>
      <p className="auth-link" onClick={onToggleForm}>
        {formType === 'login' ? "Bạn chưa có tài khoản? Đăng ký ngay!" : 'Đã có tài khoản? Đăng nhập ngay thôi'}
      </p>
      {formType === 'login' && (
        <p className="auth-link" onClick={onShowForgotPassword}>
          Quên mật khẩu?
        </p>
      )}
    </div>
  );
};

const LogPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleAuth = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
  };

  const handleToggleForm = () => {
    setShowSignUp(!showSignUp);
  };

  const handleShowForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="app-container">
      {loggedIn ? (
        <div className="auth-container">
          <p>Xin chào, {username}!</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <AuthForm
          formType={showSignUp ? 'signup' : 'login'}
          onAuth={handleAuth}
          onToggleForm={handleToggleForm}
          onShowForgotPassword={handleShowForgotPassword}
        />
      )}
    </div>
  );
};


export default LogPage;
