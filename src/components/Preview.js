import { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Preview;
