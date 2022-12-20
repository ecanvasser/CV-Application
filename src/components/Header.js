import { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <div id="header-title">CV App</div>
                <div id="header-links">
                    <a>Edit</a>
                    <a>Preview</a>
                </div>
            </header>
        )
    }
}

export default Header