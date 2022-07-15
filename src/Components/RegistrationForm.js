import React from 'react';

const RegistrationForm = () => {
  
  return (
    <div>
      <h2>Registration Form</h2>
      <form>
        <label>Create Username</label>
        <input type="text" placeholder="username" />
        <label>Create Password</label>
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;