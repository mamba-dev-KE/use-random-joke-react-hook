import React, { useRef, useState } from 'react';
import './style.css';
import useRandomJoke from './useRandomJoke';

export default function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState('Chuck');
  const [lastName, setLastName] = useState('Norris');

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div>
      <section>
        <div className="container row">
          <h1>The Joke Generator</h1>
          <p>{joke}</p>
          <form>
            <input
              className="input"
              placeholder="Enter first name"
              ref={firstNameRef}
            />
            <input
              className="input"
              placeholder="Enter last name"
              ref={lastNameRef}
            />
            <br />
            <button className="btn" onClick={generateJoke}>
              Generate Joke
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
