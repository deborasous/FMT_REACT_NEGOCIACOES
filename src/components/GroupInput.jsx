import React from "react";

const GroupInput = () => {
  return (
    <div className="form-group d-flex gap-3 align-items-end w-75">
      <div className="d-grid w-100">
        <label htmlFor="date">Data</label>
        <input
          type="date"
          id="date"
          className="form-control p-2 rounded-2 border w-100"
        />
      </div>
      <div className="d-grid w-100">
        <label htmlFor="amount">Quantidade</label>
        <input
          type="text"
          id="amount"
          className="form-control p-2 rounded-2 border w-100"
        />
      </div>
      <div className="d-grid w-100">
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          id="value"
          className="form-control p-2 rounded-2 border w-100"
        />
      </div>
    </div>
  );
};

export default GroupInput;
