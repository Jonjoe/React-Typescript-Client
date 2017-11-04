import * as React from "react";

interface IProps {}
interface IState {
  users: any;
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZWM5N2Y1ZGFiNzE0MGFhZjFkZDVlZCIsImlhdCI6MTUwOTQ2OTAzNX0.bAD6goYitvJevUqRPQLQX4ZcG8SDGYyOwlTO5M11Q9Q";

class UsersView extends React.Component {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      users: this.getUsers()
    };
  }

  async getUsers() {
    return await fetch("http://localhost:1337/api/v1/users");
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <p>users</p>
      </div>
    );
  }
}

export default UsersView;
