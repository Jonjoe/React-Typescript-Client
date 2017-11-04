import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navigation } from "../../components";
import { HomeView, UsersView } from "../../containers";

import AuthGate from "../../components/AuthGate";

interface IProps {}

export default class App extends React.Component {
  constructor(props: IProps) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Router>
        <div>
          <Navigation />
          <hr />
          <AuthGate>
            <Route exact path="/" component={HomeView} />
            <Route path="/users" component={UsersView} />
          </AuthGate>
        </div>
      </Router>
    );
  }
}
