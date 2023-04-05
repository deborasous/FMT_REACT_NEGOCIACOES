import PropTypes from "prop-types";

const GroupInput = (props) => {
  // desestrutura a props
  const { label, id, type, min, step, valor, modify } = props;

  return (
    <div className="form-group d-block gap-3 align-items-end w-75 p-0">
      <label htmlFor={id}>{label}</label>
      <input
        className="form-control w-100"
        required
        id={id}
        type={type}
        min={min}
        step={step}
        value={valor}
        onChange={modify}
      />
    </div>
  );
};

GroupInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  modify: PropTypes.func.isRequired,
};

export default GroupInput;
