import React from 'react';

const LoginForm = () => {
  
  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <label>Enter Username</label>
        <input type="text" placeholder="username" />
        <label>Enter Password</label>
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;