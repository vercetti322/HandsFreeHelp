/* eslint-disable react/prop-types */
import { useState } from 'react';
import './SessionModal.css';

export default function SessionModal({ close, submit }) {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    submit(email);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>New Session with Client</h2>
        <p>Enter client&apos;s mail id to send remote access file</p>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email address"
        />
        <div className="buttons">
          <button onClick={close}>Close</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
