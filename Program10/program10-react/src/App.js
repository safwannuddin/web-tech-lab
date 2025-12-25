// Program-10: Demonstrate rendering HTML and JSX using React.js
// Roll Number: 1604-22-733-177

// Inline styling object
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "2px solid #2E86C1",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#F2F4F4"
  },
  title: {
    color: "#154360",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#1A5276",
    fontWeight: "600",
    marginBottom: "5px"
  },
  rollNumber: {
    color: "#6C3483",
    marginBottom: "15px"
  },
  text: {
    color: "#273746",
    fontSize: "18px",
    marginBottom: "15px"
  }
};

function WebTech() {
  var title = "MJCET";
  var d = new Date();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>Web Technologies Lab</h2>
      <h4 style={styles.rollNumber}>Roll Number: 1604-22-733-177</h4>
      <p style={styles.text}>{d.toDateString()}</p>
      <GetVision />
    </div>
  );
}

function GetVision() {
  return (
    <p style={{ color: "#0E6251", fontWeight: "600" }}>
      MJCET is a premier institution offering quality education.
    </p>
  );
}

export default WebTech;
