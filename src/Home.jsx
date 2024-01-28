import React from 'react';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
];

const Home = () => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {mockEmployees.map(employee => (
          <li key={employee.id}>
            <strong>{`${employee.name} ${employee.lastname}`}</strong> - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
