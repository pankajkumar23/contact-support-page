import React from "react";
import style from "./button.module.css";
const Button = ({ isOutline,text, icon,...rest }) => {
  return (
    <div>
      <button  {...rest} className={isOutline ? style.outline_btn: style.primary_btn}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
