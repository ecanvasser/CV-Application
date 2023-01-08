import Document from "./Document";
import "../styles/Content.css";

const Content = (props) => {
  return (
    <main>
      <Document preview={props.preview} />
    </main>
  );
}

export default Content;
