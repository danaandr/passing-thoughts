import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

//returns a new state: the array with a new thought at the front
  const addThought = (thought) => {
    setThoughts((thoughts) => [thought,...thoughts]);
        }
//filter out the thought we want to remove
const removeThought = (thoughtIdToRemove) => {
setThoughts((thoughts) => 
thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
);
};

  return (
    <div className="App">
      <header className="logo">
        <img src={require('./logo.png')} alt="logo" width="450" height="450"></img>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;