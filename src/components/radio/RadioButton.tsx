import React from "react";

interface PropComponent {
  label?: any;
  value?: any;
  name?: string;
  checked?: boolean;
  onChange?: any;
  className?: string;
  children?: any;
}
const RadioButton: React.FC<PropComponent> = ({
  label,
  name,
  value,
  checked,
  onChange,
  className,
  children,
}) => {
  return (
    <>
      <div
        className={` ${className} ${
          checked ? "border-primary transition-all" : ""
        }`}
      >
        <label
          className={`relative inline-flex items-center cursor-pointer w-full h-full p-4`}
        >
          <span
            className={`flex h-5 w-5 rounded-full border-2 border-solid ${
              checked ? "border-primary" : "border-gray-400"
            }`}
          >
            <span
              className={`m-auto w-3 h-3 rounded-full ${
                checked ? "bg-primary" : ""
              }`}
            ></span>
          </span>
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className="form-radio hidden h-4 w-4 text-primary "
          />
          <span className={`ml-3 ${checked ? "text-primary" : ""}`}>
            {label}
          </span>
        </label>
        {checked ? children : <></>}
      </div>
    </>
  );
};

export default RadioButton;
