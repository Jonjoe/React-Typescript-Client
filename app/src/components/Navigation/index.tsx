import React, { Component } from "react";
import { Link } from "react-router-dom";

interface IProps {}

class Navigation extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">About</Link>
      </nav>
    );
  }
}

export default Navigation;
