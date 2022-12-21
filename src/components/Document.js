import { Component } from "react";
import "../styles/Document.css";

class Document extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }
  
    render() {
    return (
      <div id="document">
        <form id="name">
          <input type="text" placeholder="Name" onChange={this.handleChange}/>
        </form>
        <div id="name-divider"></div>
      </div>
    );
  }
}

export default Document;
