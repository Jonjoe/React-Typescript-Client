import * as React from "react";

interface IProps {}

class HomeView extends React.Component {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <p>home</p>
      </div>
    );
  }
}

export default HomeView;
