import "../styles/Preview.css";
import ExperiencePreview from "./ExperiencePreview";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { IconContext } from "react-icons";

const Preview = (props) => {
  return (
    <div id="preview">
      <div id="name-prev">{props.general.name}</div>
      <div id="role">{props.general.role}</div>
      <div id="divider"></div>
      <div id="contact-prev">
        <div id="email-prev">
          <IconContext.Provider value={{ color: "#0891b2", size: "1.4em" }}>
            <div>
              <MdEmail />
            </div>
          </IconContext.Provider>
          {props.general.email}
        </div>
        <div id="phone-prev">
        <IconContext.Provider value={{ color: "#0891b2", size: "1.4em" }}>
            <div>
              <MdSmartphone />
            </div>
          </IconContext.Provider>
          {props.general.phone}
          </div>
        <div id="location-prev">
          <IconContext.Provider value={{ color: "#0891b2", size: "1.4em" }}>
            <div>
              <MdLocationOn />
            </div>
          </IconContext.Provider>
          {props.general.location}
        </div>
      </div>
      <div id="divider"></div>
      <div id="edu-skills">
        <div id="edu-half">
          <div id="edu-title">Education</div>
          <div id="edu-details">
            <div id="school-prev">{props.education.school}</div>
            <div id="degree-prev">{props.education.degree}</div>
            <div id="startend-prev">{props.education.duration}</div>
          </div>
        </div>
        <div id="skill-half">
          <div id="skills-title">Skills</div>
          <div id="skill-list">
            {props.skills.map((skill) => {
              return <div className="skill-block">{skill}</div>;
            })}
          </div>
        </div>
      </div>
      <div id="divider"></div>
      <div id="exp-title">Experience</div>
      <div id="prevExp">
        {Array.from(Object.values(props.experience.inputs)).map(
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
