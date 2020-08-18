import React from "react";

function InputForm({
  labelText,
  inputId,
  inputType,
  inputPlaceholder,
  value,
  handleChange,
}) {
  return (
    <div className="mb-2">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={inputId}
      >
        {labelText}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={inputId}
        type={inputType}
        placeholder={inputPlaceholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputForm;
