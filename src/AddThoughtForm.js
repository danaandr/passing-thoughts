import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  //set the initial state of the text input as an empty string
const [text, setText] = useState(''); 


//will be called when the input changes
const handleTextChange = (event) => {
  setText(event.target.value);
};

//create a new thought object when the form is submitted
const handleSubmit = (event) => {
// prevents the browser from performing its default behavior when a form is submitted
event.preventDefault(); 
const thought = {
  id: generateId(),
  text: text,
  expiresAt: getNewExpirationTime(),
};

//only add text if user typed something
if(text.length > 0) {
  props.addThought(thought);
  //clear the form after submitting text
  setText('');
};
}

 return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
      value={text}
      onChange={handleTextChange}
      type="text"
      aria-label="What's on your mind?"
      placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
