import "react-hot-loader/patch";

import * as React from "react";
import { render } from "react-dom";

import { AppContainer } from "react-hot-loader";

import App from "./containers/App";

const reactContainer = document.getElementById("reactContainer");

render(
  <AppContainer>
    <App />
  </AppContainer>,
  reactContainer
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    const NextApp = require<{ default: typeof App }>("./containers/App")
      .default;
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      reactContainer
    );
  });
}
