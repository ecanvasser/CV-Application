import "../styles/Preview.css";
import ExperiencePreview from "./ExperiencePreview";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { IconContext } from "react-icons";

const Preview = (props) => {
  return (
    <div id="preview">
      <div id="name-prev">{props.data.name}</div>
      <div id="role">{props.data.role}</div>
      <div id="divider"></div>
      <div id="contact-prev">
        <div id="email-prev">
          <IconContext.Provider value={{ color: "#0891b2", size: "1.4em" }}>
            <div>
              <MdEmail />
            </div>
          </IconContext.Provider>
          {props.data.email}
        </div>
        <div id="phone-prev">
        <IconContext.Provider value={{ color: "#0891b2", size: "1.4em" }}>
            <div>
              <MdSmartphone />
            </div>
          </IconContext.Provider>
          {props.data.phone}
          </div>
        <div id="location-prev">
          <IconContext.Provider value={{ color: "#0891b2", size: "1.4em" }}>
            <div>
              <MdLocationOn />
            </div>
          </IconContext.Provider>
          {props.data.location}
        </div>
      </div>
      <div id="divider"></div>
      <div id="edu-skills">
        <div id="edu-half">
          <div id="edu-title">Education</div>
          <div id="edu-details">
            <div id="school-prev">{props.data.education.school}</div>
            <div id="degree-prev">{props.data.education.degree}</div>
            <div id="startend-prev">{props.data.education.duration}</div>
          </div>
        </div>
        <div id="skill-half">
          <div id="skills-title">Skills</div>
          <div id="skill-list">
            {props.data.skills.map((skill) => {
              return <div className="skill-block">{skill}</div>;
            })}
          </div>
        </div>
      </div>
      <div id="divider"></div>
      <div id="exp-title">Experience</div>
      <div id="prevExp">
        {Array.from(Object.values(props.data.experience.inputs)).map(
          (e) => {
            return (
              <ExperiencePreview
                company={e["company"]}
                dates={e["dates"]}
                location={e["location"]}
                title={e["title"]}
                tasks={e["tasks"]}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Preview;
