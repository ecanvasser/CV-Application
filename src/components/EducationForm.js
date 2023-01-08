import '../styles/EducationForm.css'

const EducationForm = (props) => {
  return (
    <>
      <div id="edu-title-edit">Education</div>
      <form id="education">
        <input
          id="school"
          name="school"
          type="text"
          placeholder="Organization"
          onChange={props.handleChange}
          value={props.school}
        />
        <input
          id="degree"
          name="degree"
          type="text"
          placeholder="Degree/Major"
          onChange={props.handleChange}
          value={props.degree}
        />
        <input
          id="startend"
          name="duration"
          type="text"
          placeholder="Start year - End Year"
          onChange={props.handleChange}
          value={props.duration}
        />
      </form>
    </>
  );
}

export default EducationForm;
