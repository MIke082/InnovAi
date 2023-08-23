import React from 'react';
import './AppForm.css';

const AppForm = () => {
  return (
    <div className="app-form">
      <h2>Sign up for updates</h2>
      <form>
        <div className="input-container">
          <p className='input-text'>First name</p>
          <input type="text" placeholder="John" style={{ padding: '6px', fontSize: 16 }} />
        </div>
        <div className="input-container">
          <p className='input-text'>Last name</p>
          <input type="text" placeholder="Doe" style={{ padding: '6px',fontSize: 16 }}/>
        </div>
        <div className="input-container">
          <p className='input-text'>Phone number</p>
          <input type="tel" placeholder="+972501234567" style={{ padding: '6px', fontSize: 16 }}/>
        </div>
        <div className="input-container">
          <p className='input-text'>E-mail</p>
          <input type="email" placeholder="johnDoe@gmail.com" style={{ padding: '6px', fontSize: 16 }}/>
        </div>
        <button type="submit">Subscribe</button>
      </form>
      <p className="privacy-text">
        We respect your privacy. We ensure not to spam you with emails, and we will keep you posted once we are live.
        You can always unsubscribe at any time.
      </p>
    </div>
  );
};

export default AppForm;
