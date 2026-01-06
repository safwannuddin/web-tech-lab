// Import required React hooks
import { useEffect, useState } from "react";

function App() {

  // State to store student data
  const [students, setStudents] = useState([]);

  // useEffect runs when component loads
  // Used to fetch data from backend REST API
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  // Render the UI
  return (
    <center>
      <h2>Student List</h2>

      {/* Display data in table format */}
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>

        {/* Loop through student data */}
        {students.map(s => (
          <tr key={s._id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
          </tr>
        ))}
      </table>
    </center>
  );
}

// Export component
export default App;
