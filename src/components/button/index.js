import React from "react";
import "./button.css";
export default function Button({ cname }, { title }) {
  console.log(title);
  return <button className={cname}>{title}</button>;
}
