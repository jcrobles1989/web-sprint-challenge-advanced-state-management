import React, { useState } from "react";

const SmurfForm = (props) => {
  const initialState = {
    name: "",
    age: "",
    height: "",
  };

  const [smurf, setSmurf] = useState(initialState);

  const handleChanges = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
    setSmurf(initialState);
  };

  return (
    <div className="smurf-form">
      <form>
        <input
          type="text"
          name="name"
          value={smurf.name}
          placeholder="name"
          onChange={handleChanges}
        />
        <br />
        <input
          type="text"
          name="age"
          value={smurf.age}
          placeholder="age"
          onChange={handleChanges}
        />
        <br />
        <input
          type="text"
          name="height"
          value={smurf.height}
          placeholder="height"
          onChange={handleChanges}
        />
      </form>
      <button onClick={handleSubmit}>Add Smurf</button>
    </div>
  );
};

export default SmurfForm;
