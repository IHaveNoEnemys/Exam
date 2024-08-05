import React from 'react';
import './DepartmentPage.css';

const DepartmentPage = ({ department }) => {
  return (
    <div className="department-page">
      <h2 className="department-name">{department.name}</h2>
      <div className="department-head">
        <h3>Head of Department</h3>
        <p>{department.head}</p>
      </div>
      <div className="department-members">
        <h3>Members</h3>
        <ul>
          {department.members.map((member, index) => (
            <li key={index} className="member-item">{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentPage;
