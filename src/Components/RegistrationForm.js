import React from 'react';

const RegistrationForm = () => {
  
  return (
    <div>
      <h1>Registration Form</h1>
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

export default RegistrationForm;