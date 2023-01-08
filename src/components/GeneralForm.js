const GeneralForm = (props) => {
  return (
    <>
      <form id="name">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={props.handleChange}
          value={props.name}
        />
      </form>
      <form>
        <input
          id="role-edit"
          name="role"
          type="text"
          placeholder="Current title"
          onChange={props.handleChange}
          value={props.role}
        />
      </form>
      <form id="contact">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={props.handleChange}
          value={props.email}
        />
        <input
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone"
          onChange={props.handleChange}
          value={props.phone}
        />
        <input
          id="location"
          name="location"
          type="text"
          placeholder="City, State"
          onChange={props.handleChange}
          value={props.location}
        />
      </form>
    </>
  );
};

export default GeneralForm;
