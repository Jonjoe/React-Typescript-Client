import React, { Component } from "react";

interface IProps {}

class SignInView extends Component {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div>
        <p>Sign In!</p>
      </div>
    );
  }
}

export default SignInView;
