import Header from "./components/Header";
import Content from "./components/Content";
import { useState } from "react";
import "./styles/App.css";

const App = () => {
  const [preview, setPreview] = useState(false);

  const changePreview = () => {
    setPreview(true);
  };

  const changeEdit = () => {
    setPreview(false);
  };

  return (
    <div id="app">
      <Header changePreview={changePreview} changeEdit={changeEdit} />
      <Content preview={preview} />
    </div>
  );
};

export default App;
