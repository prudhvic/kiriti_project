import React from "react";

const GymForm = () => {
  return (
    <div className="container">
      <h1>Gym Register Form</h1>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" />
        </div>
        <div className="form-control">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" />
        </div>
        <div className="form-control">
          <label htmlFor="contact_no">Contact No</label>
          <input type="text" id="contact_no" />
        </div>
        <div className="flex-form">
          <div className="form-control">
            <label htmlFor="height">Height(In cm)</label>
            <input type="text" id="height" />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight(In KG)</label>
            <input type="text" id="weight" />
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div className="form-control">
          <label htmlFor="experince">Previous Gym Experience?</label>
          <select id="experince">
            <option value="Yes">Yes</option>
            <option value="NO">NO</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="subscription">choose Subscription</label>
          <select id="subscription">
            <option value="One month">One month</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Half yearly">Half yearly</option>
            <option value="Per annum">Per annum</option>
          </select>
        </div>
        <button className="register-btn btn">Register</button>
      </form>
    </div>
  );
};

export default GymForm;
