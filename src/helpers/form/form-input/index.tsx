import React, { ChangeEvent } from "react";
import "./index.styles.scss";

interface IFormInput {
  label: string;
  type: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  value: any;
  name: string;
}

const FormInput: React.FC<IFormInput> = ({
  label,
  type,
  changeHandler,
  value,
  name,
}) => {
  return (
    <div className="group">
      <input
        className="form-input"
        type={type}
        onChange={changeHandler}
        name={name}
        value={value}
        required
      />
      {label && (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
