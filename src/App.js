import "./styles/App.css";
import { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: false,
    };

    this.changePreview = this.changePreview.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
  }

  changePreview = () => {
    this.setState({ preview: true });
  };

  changeEdit = () => {
    this.setState({ preview: false });
  };

  render() {
    return (
      <div id="app">
        <Header
          changePreview={this.changePreview}
          changeEdit={this.changeEdit}
        />
        <Content preview={this.state.preview} />
      </div>
    );
  }
}

export default App;
