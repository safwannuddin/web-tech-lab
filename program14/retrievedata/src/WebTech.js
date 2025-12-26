import { Component } from "react";

class WebTech extends Component {
  state = { students: [] };

  componentDidMount() {
    fetch("http://localhost:8080/retrieve")
      .then(res => res.json())
      .then(data => this.setState({ students: data }));
  }

  render() {
    return (
      <div>
        <h2>Student Data from MongoDB - 1604-22-733-177</h2>
        
        <table border="1">
          <tr><th>ID</th><th>Name</th><th>Marks</th></tr>

          {this.state.students.map((s, i) => (
            <tr key={i}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default WebTech;
