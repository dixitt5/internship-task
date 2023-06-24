import React from "react";
const BlackMenuItem = ({ content, icon_name }) => (
  <div className="m-[3rem] flex items-center hover:font-[700] cursor-pointer text-black text-xl">
    {icon_name}
    <div>{content}</div>
  </div>
);

export default BlackMenuItem;
