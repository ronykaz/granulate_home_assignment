import React from "react";

function Button({ bgColor, hoverColor, textColor, children, handleClick }) {
  return (
    <button
      class={`bg-${bgColor} hover:bg-${hoverColor} text-${textColor}
       font-bold py-2 px-4 rounded border`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
