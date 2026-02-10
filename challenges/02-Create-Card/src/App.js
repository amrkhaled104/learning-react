import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#264de4",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#f7df1e",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84E33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#61DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3E00",
  },
];
export default function App() {
  return (
    <div className="Card">
      <Avatar photo="me.jpg" name="amr khaled" />
      <div className="data">
        <Intro />
        <Skillist />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="Avatar">
      <img src={props.photo} alt={props.name} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Amr Khaled</h1>
      <p style={{ fontSize: "1.1rem" }}>
        Full-stack Web Developer in the making. I'm currently mastering React
        and building cool projects Full-stack Web Developer in the making. I'm
        currently mastering React and building cool projects
      </p>
    </div>
  );
}

function Skillist() {
  return (
    <div className="Skillist">
      {skills.map((S) => (
        <Skill name={S.skill} color={S.color} level={S.level} />
      ))}
    </div>
  );
}

function Skill({ name, color, level }) {
  return (
    <span className="Skill" style={{ backgroundColor: color }}>
      {name} {(level = "advanced" ? "💪" : (level = "beginner" ? "👶" : "👍"))}
    </span>
  );
}
