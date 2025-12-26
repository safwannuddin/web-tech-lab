// Program-11: Demonstrate use of props, events, lists, forms using React.js
// Roll Number: 1604-22-733-177

import React from "react";

function WebTech() {
  return (
    <div style={{ fontFamily: "Arial", maxWidth: "600px", margin: "20px auto" }}>
      <h2 style={{ color: "#1A5276" }}>Web Technologies Laboratory</h2>
      <h4 style={{ color: "#6C3483" }}>Roll Number: 1604-22-733-177</h4>

      {/* Props Example */}
      <User name="Mohd Safwan " uid={101} />
      <User name="Uddin" uid={102} />

      <hr />

      {/* Form Example */}
      <MyForm />

      <hr />

      {/* List Example */}
      <StudentList />

      <hr />

      {/* Event Example */}
      <EventDemo />
    </div>
  );
}

// Props Example
function User(props) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p>Name: {props.name}</p>
      <p>ID: {props.uid}</p>
    </div>
  );
}

// Form Example
function MyForm() {
  return (
    <form>
      Name: <input type="text" /><br /><br />
      Email: <input type="text" /><br /><br />
      Password: <input type="password" /><br /><br />
      <input type="submit" />
      <input type="reset" />
    </form>
  );
}

// List Example
function StudentList() {
  var students = ["AAA", "BBB", "CCC"];
  return (
    <ul>
      {students.map((s, i) => <li key={i}>{s}</li>)}
    </ul>
  );
}

// Event Example
function EventDemo() {
  function show() {
    alert("Button Clicked");
  }
  return <button onClick={show}>Click Me</button>;
}

export default WebTech;
