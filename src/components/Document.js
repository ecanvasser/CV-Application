import { useState } from "react";
import Preview from "./Preview";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import Experience from "./Experience";
import "../styles/Document.css";

const Document = (props) => {
  const [general, setGeneral] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    location: "",
  });
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    duration: "",
  });
  const [skills, setSkills] = useState();
  const [experience, setExperience] = useState({
    count: 0,
    taskCount: { 0: 1, 1: 1, 2: 1 },
    inputs: {},
  });

  const handleGeneralChange = (e) => {
    const value = e.target.value;
    setGeneral(Object.assign({}, general, { [e.target.name]: value }));
  };

  const handleEducationChange = (e) => {
    const value = e.target.value;
    setEducation(Object.assign({}, education, { [e.target.name]: value }));
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    setSkills(value.split(","));
  };

  const handleCount = () => {
    if (experience.count === 3) {
      return;
    }
    setExperience(
      Object.assign({}, experience, { count: experience.count + 1 })
    );
  };

  const handleExp = (e) => {
    const value = e.target.value;
    const i = parseInt(e.target.id);
    setExperience((prevExperience) => ({
      ...prevExperience,
      inputs: {
        ...prevExperience.inputs,
        [i]: Object.assign({}, experience.inputs[i], {
          [e.target.name]: value,
        }),
      },
    }));
  };

  const handleTaskCount = (i, e) => {
    let count = parseInt(experience.taskCount[i]);
    if (count < 3) {
      setExperience((prevExperience) => ({
        ...prevExperience,
        taskCount: {
          ...prevExperience.taskCount,
          [i]: count + 1,
        },
      }));
    }
    e.preventDefault();
  };

  const handleExpTasks = (e) => {
    let value = e.target.value || "";
    let i = e.target.id;
    setExperience((prevExperience) => ({
      ...prevExperience,
      inputs: {
        ...prevExperience.inputs,
        [i]: {
          ...prevExperience.inputs[i],
          tasks: Object.assign({}, experience.inputs[i].tasks, {
            [e.target.name]: value,
          }),
        },
      },
    }));
  };

  if (props.preview === false) {
    return (
      <div id="document">
        <GeneralForm
          handleChange={handleGeneralChange}
          name={general.name}
          role={general.role}
          email={general.email}
          phone={general.phone}
          location={general.location}
        />
        <EducationForm
          handleChange={handleEducationChange}
          school={education.school}
          degree={education.degree}
          duration={education.duration}
        />
        <SkillsForm handleChange={handleSkillsChange} skills={skills} />
        <Experience
          handleClick={handleCount}
          handleExp={handleExp}
          handleExpTasks={handleExpTasks}
          handleTaskCount={handleTaskCount}
          count={experience.count}
          taskCount={experience.taskCount}
          inputs={experience.inputs}
        />
      </div>
    );
  }
  return (
    <>
      <Preview 
      general={general} 
      education={education}
      skills={skills}
      experience={experience}
      />
    </>
  );
};

export default Document;
