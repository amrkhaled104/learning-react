import "./styles.css";

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
      <Skill name="Html + Css" emoji="✊" color="blue" />
      <Skill name="JavaScript" emoji="✊" color="yellow" />
      <Skill name="Web Design" emoji="✊" color="red" />
      <Skill name="Git & GitHub" emoji="✊" color="#005472" />
      <Skill name="React" emoji="✊" color="gray" />
      <Skill name="programming" emoji="✊" color="#123547" />
    </div>
  );
}

function Skill(props) {
  return (
    <span className="Skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.emoji}
    </span>
  );
}
