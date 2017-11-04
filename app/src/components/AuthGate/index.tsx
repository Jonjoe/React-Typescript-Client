import React, { Component } from "react";
import SignInView from "../../containers/SignIn";

interface IProps {
  children: JSX.Element;
}

class AuthGate extends Component {
  constructor(props: IProps) {
    super(props);
  }

  getAccess() {
    return true;
  }

  render(): JSX.Element {
    if (this.getAccess()) {
      return <div>{this.props.children}</div>;
    } else {
      return <SignInView />;
    }
  }
}

export default AuthGate;
