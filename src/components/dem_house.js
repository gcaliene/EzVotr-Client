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
        <li key={member.id} className=" ">
          <div className="row ">
            <div className="col s12 m6 ">
              <div className="card blue-grey darken-1 ">
                <div className="card-content white-text ">
                  <span className="card-title">
                    {member.short_title} {member.first_name}{' '}
                    {member.middle_name} {member.last_name}
                  </span>
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>{' '}
        </li>
      );
    });
  }
  //There is a deprecation error with componentWillRecieveProps, so this must be solved before moving on further. I found the issue. react-dom package needs to be upgraded to 16.3.2 version as well.
  UNSAFE_componentWillReceiveProps() {
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
