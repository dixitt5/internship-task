import React from "react";
import BlackMenuItem from "./BlackMenuItem";

import { AiOutlinePieChart } from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

const BlackMenu = () => (
  <div className="black-menu">
    <BlackMenuItem
      content="Dashboard"
      icon_name={<AiOutlinePieChart className="mr-[1rem]" />}
    />
    <BlackMenuItem
      content="Transactions"
      icon_name={<BsTags className="mr-[1rem]" />}
    />
    <BlackMenuItem
      content="Schedules"
      icon_name={<AiOutlinePieChart className="mr-[1rem]" />}
    />
    <BlackMenuItem
      content="Users"
      icon_name={<BiUserCircle className="mr-[1rem]" />}
    />
    <BlackMenuItem
      content="Settings"
      icon_name={<AiOutlineSetting className="mr-[1rem]" />}
    />
  </div>
);

export default BlackMenu;
