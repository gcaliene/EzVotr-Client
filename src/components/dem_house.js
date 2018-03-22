import React, { Component } from 'react';
import _ from 'lodash';

const DemHouse = ({ house }) => {
  const houseMembers = house;
  console.log(houseMembers);
  const renderMembers = house => {
    return houseMembers.map((member, index) => {
      <li key={member.id}>{member.short_title}</li>;
    });
  };
  console.log();
  return (
    <div>
      <ul>{renderMembers()}</ul>
    </div>
  );
};

export default DemHouse;
