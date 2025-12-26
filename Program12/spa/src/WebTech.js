import { Component } from "react";

class WebTech extends Component {
  state = { students: [], imarks: [], emarks: [] };

  componentDidMount() {
    fetch("http://localhost:8080/students")
      .then(res => res.json())
      .then(data => this.setState({ students: data }));
  }

  loadIMarks = () => {
    fetch("http://localhost:8080/imarks")
      .then(res => res.json())
      .then(data => this.setState({ imarks: data }));
  };

  loadEMarks = () => {
    fetch("http://localhost:8080/emarks")
      .then(res => res.json())
      .then(data => this.setState({ emarks: data }));
  };

  render() {
    return (
      <div>
        <h2>Students Data</h2>
        <button onClick={this.loadIMarks}>Internal Marks</button>
        <button onClick={this.loadEMarks}>External Marks</button>

        <table border="1">
          <tr>
            <th>Roll No.</th>
          </tr>
          <tr>
            <td>1604-22-733-177</td>
          </tr>

          <tr>
            <th>Name</th>
            <th>IMarks</th>
            <th>EMarks</th>
          </tr>

          <tr>
            <td>{this.state.students.map(s => <div>{s.name}</div>)}</td>
            <td>{this.state.imarks.map(i => <div>{i.marks}</div>)}</td>
            <td>{this.state.emarks.map(e => <div>{e.marks}</div>)}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default WebTech;

