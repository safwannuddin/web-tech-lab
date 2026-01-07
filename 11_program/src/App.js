// Program-11: Demonstrate use of props, events, lists, forms using React.js
// Name: Safwan
// Roll No: 1604-22-733-177

import React from "react";

// Main component
function WebTech() {
  return (
    <div>
      <h1>Safwan</h1>
      <h3>Roll No: 1604-22-733-177</h3>

      <hr />

      {/* Props example */}
      <User name="Safwan" uid={101} />
      <User name="Ahad" uid={102} />

      <hr />

      {/* Form example */}
      <MyForm />

      <hr />

      {/* List example */}
      <StudentList />

      <hr />

      {/* Event example */}
      <EventDemo />
    </div>
  );
}

// Props: receiving data from parent component
function User(props) {
  return (
    <p>
      Student Name: {props.name} <br />
      Student ID: {props.uid}
    </p>
  );
}

// Form: collecting user input
function MyForm() {
  return (
    <form>
      Name: <input type="text" /><br /><br />
      Email: <input type="text" /><br /><br />
      <input type="submit" value="Register" />
    </form>
  );
}

// List: rendering multiple values using map()
function StudentList() {
  const students = ["Safwan", "Ahad", "Razi"];

  return (
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

// Event: handling button click
function EventDemo() {
  function show() {
    alert("Button Clicked");
  }

  return <button onClick={show}>Click Me</button>;
}

export default WebTech;
