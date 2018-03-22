import React, { Component } from 'react';
// import _ from 'lodash';

class DemHouse extends Component {
  // console.log(houseMembers);
  constructor(props) {
    super(props);
    this.renderMembers = this.renderMembers.bind(this);
  }

  renderMembers() {
    console.log(this.props);
    // .map((member, index) => {
    //   return <li key={member.id}>{member.short_title}</li>;
    // });
  }

  componentDidUpdate() {
    const members = this.props;
    console.log(members);
  }

  render() {
    return (
      <div>
        <ul>{this.props}</ul>
      </div>
    );
  }
}

export default DemHouse;
