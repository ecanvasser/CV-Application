import "../styles/SkillsForm.css";

const SkillsForm = (props) => {
  return (
    <>
      <div id="skills-title-edit">Skills</div>
      <form id="skills-form">
        <textarea
          name="skills"
          onChange={props.handleChange}
          value={props.skills}
          placeholder="Skill1,skill2,skill3, etc"
        />
      </form>
    </>
  );
};

export default SkillsForm;
