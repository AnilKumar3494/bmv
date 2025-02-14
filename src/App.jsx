import { useState } from "react";
import "./App.css";
import Happyemojirain from "./components/HappyEmojiRain";
import Valentine from "./components/Valentine";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Valentine />
    </>
  );
}

export default App;
