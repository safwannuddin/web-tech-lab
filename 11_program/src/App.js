// Program-11: Demonstrate use of props, events, lists, forms using React.js
// Name: Safwan
// Roll No: 1604-22-733-177

import React from "react";

function WebTech() {
  return (
    <div>
      <h1>Safwan</h1>
      <h3>Roll No: 1604-22-733-177</h3>

      <hr />

      {/* PROPS: Display student details */}
      <h3>Student Details (Props)</h3>
      <User name="Safwan" uid={101} />
      <User name="Ahad" uid={102} />

      <hr />

      {/* FORM: Student registration */}
      <h3>Student Registration Form</h3>
      <MyForm />

      <hr />

      {/* LIST: Display list of students */}
      <h3>Student List</h3>
      <StudentList />

      <hr />

      {/* EVENT: Button click */}
      <h3>Event Handling</h3>
      <EventDemo />
    </div>
  );
}

// PROPS example: Receiving data from parent component
function User(props) {
  return (
    <p>
      Student Name: {props.name} <br />
      Student ID: {props.uid}
    </p>
  );
}

// FORM example: Collecting student input
function MyForm() {
  return (
    <form>
      Name: <input type="text" /><br /><br />
      Email: <input type="text" /><br /><br />
      <input type="submit" value="Register" />
    </form>
  );
}

// LIST example: Rendering multiple students dynamically
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

// EVENT example: Handling button click
function EventDemo() {
  function show() {
    alert("Button Clicked");
  }

  return <button onClick={show}>Click Me</button>;
}

export default WebTech;
