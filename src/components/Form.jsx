import React from "react";
import GroupInput from "./GroupInput";

const Form = () => {
  return (
    <form className="form container">
      <div className="row ">
        <GroupInput />
        <div className="col-1 d-flex align-items-end">
          <button className="btn btn-primary px-3 py-2" type="button">
            Incluir
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
