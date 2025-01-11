import './Hero.css';
import { useState } from 'react';
import SessionModal from './SessionModal/SessionModal';

export default function Hero() {
  const [modal, setModal] = useState(false);

  const createSession = () => {
    setModal(!modal);
  };

  const sendFile = async (email) => {
    const data = new URLSearchParams();
    data.append('receiverMail', email);

    fetch('http://localhost:8080/api/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.toString();
      })
      .then((data) => {
        console.log('Success', data);
      })
      .catch((error) => {
        console.error('Error', error);
      });

    setModal(!modal);
  };

  return (
    <div className="hero">
      <h1>Secure & Seamless Remote Access</h1>
      <p>Control and troubleshoot systems from anywhere with ease.</p>
      <button onClick={createSession} className="session">
        Start a Remote Session
      </button>
      <button className="learn">Learn More</button>
      {modal && (
        <SessionModal close={() => setModal(false)} submit={sendFile} />
      )}
    </div>
  );
}
