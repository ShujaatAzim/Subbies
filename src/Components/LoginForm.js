import React from 'react';

const LoginForm = () => {
  
  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <label>Username</label>
        <input type="text" placeholder="username" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;