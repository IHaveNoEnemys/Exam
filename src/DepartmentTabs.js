import React, { useState } from 'react';
import DepartmentPage from './DepartmentPage';
import './DepartmentTabs.css';

const departments = [
  {
    name: 'Computer Science',
    head: 'კახი კახიძე',
    members: ['გულადი ფარტენაძე', 'ამირანი შარაძე', 'ოლეგი ირემაძე']
  },
  {
    name: 'Mathematics',
    head: 'ონისე სურმანიძე',
    members: ['რუსლან ცინარიძე', 'ფრიდონ დუმბაძე', 'ციცინო სარაჯიშვილი']
  },
  {
    name: 'Physics',
    head: 'გია ავალიშვილი',
    members: ['მაგდა ალანია', 'ლელა ალხაზიშვილი', 'ნათელა არჩვაძე']
  },
  {
    name: 'Chemistry',
    head: 'მალხაზ ბაკურაძე',
    members: ['ალექსანდრე გამყრელიძე', 'რამაზი გახოკიძე', 'მერაბ ელიაშვილი']
  }
];

const DepartmentTabs = () => {
  const [selectedTab, setSelectedTab] = useState(departments[0]);

  return (
    <div className="department-tabs">
      <div className="tabs">
        {departments.map((dept, index) => (
          <button
            key={index}
            className={`tab ${selectedTab.name === dept.name ? 'active' : ''}`}
            onClick={() => setSelectedTab(dept)}
          >
            {dept.name}
          </button>
        ))}
      </div>
      <DepartmentPage department={selectedTab} />
    </div>
  );
};

export default DepartmentTabs;
