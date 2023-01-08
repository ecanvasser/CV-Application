import "../styles/Header.css";

const Header = (props) => {
  return (
    <header>
      <div id="header-title">CV App</div>
      <div id="header-links">
        <button onClick={() => props.changeEdit()} id="edit-btn">
          Edit
        </button>
        <button onClick={() => props.changePreview()} id="prev-btn">
          Preview
        </button>
      </div>
    </header>
  );
};

export default Header;
