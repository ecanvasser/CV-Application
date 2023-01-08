import ExperienceForm from "./ExperienceForm";
import "../styles/Experience.css";

const Experience = (props) => {
  return (
    <>
      <div id="experience-title">Experience</div>
      <div id="dynamic-form">
        {[...Array(props.count)].map((e, i) => {
          if (e !== 0) {
            return (
              <ExperienceForm
                key={i}
                id={i}
                handleExp={props.handleExp}
                handleExpTasks={props.handleExpTasks}
                handleTaskCount={props.handleTaskCount}
                taskCount={props.taskCount[i]}
                inputs={props.inputs[i] || ""}
              />
            );
          }
        })}
      </div>
      <div id="add-btn-container">
        <button id="add-btn" onClick={() => props.handleClick()}>
          Add Experience
        </button>
      </div>
    </>
  );
}

export default Experience;
