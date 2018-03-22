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
    console.log(this.state.houseMembers);
    return this.state.houseMembers.map((member, index) => {
      console.log(member);
      return (
        <li key={member.id}>
          {' '}
          Name: {member.short_title} {member.first_name} {member.middle_name}{' '}
          {member.last_name}{' '}
        </li>
      );
    });
  }

  componentWillReceiveProps() {
    const members = this.props;
    this.setState({ houseMembers: members.house }, () =>
      console.log(this.state)
    );
    console.log(this.props);
  }

  // if(this.state.cham)
  render() {
    return (
      <div>
        <ul>
          {this.props.chamber === 'house'
            ? this.renderMembers()
            : 'Nothing to see here'}
        </ul>
      </div>
    );
  }
}

export default DemHouse;
