import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "smile",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "🥡": "takeout box"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojInputHandler} />
      <h2> {meaning}</h2>
    </div>
  );
}
