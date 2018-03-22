import React, { Component } from 'react';
// import _ from 'lodash';

class DemHouse extends Component {
  // console.log(houseMembers);
  constructor(props) {
    super(props);
    this.state = {
      houseMembers: this.props.house,
      chamber: this.props.chamber
    };
    this.renderMembers = this.renderMembers.bind(this);
  }

  renderMembers() {
    return this.state.houseMembers.map((member, index) => {
      return <li key={member.id}>{member.short_title}</li>;
    });
  }

  componentWillReceiveProps() {
    const members = this.props;
    this.setState({ houseMembers: members.house });
    // console.log(this.state);
    // console.log(members);
    // console.log(this.state);
    return (
      <div>
        <ul>{this.renderMembers()}</ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ul>{this.renderMembers()}</ul>
      </div>
    );
  }
}

export default DemHouse;
