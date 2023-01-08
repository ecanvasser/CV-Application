import "../styles/ExperiencePreview.css";

const ExperiencePreview = (props) => {
  return (
    <div className="prevExp-block">
      <div className="top-row">
          <div className="company-name">{props.company}</div>
          <div className="job-length">{props.dates}</div>
      </div>
      <div className="job-title">{props.title}</div> 
      <div className="job-location">{props.location}</div>
      {(Array.from(Object.values(props.tasks))).map((e) => {
          return <div className="jobtask-prev"><div className="task-dash">-</div>{e}</div>
      })}
    </div>
  );
}

export default ExperiencePreview;
