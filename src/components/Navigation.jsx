import React from "react";

import { BiBell } from "react-icons/bi";

const Navigation = () => (
  <nav className="flex flex-row items-center text-black">
    <h1 className="font-[700] text-3xl">Dashboard</h1>
    <div className="ml-auto w-[3rem] flex flex-row justify-between items-center">
      <div>
        <BiBell />
      </div>
      <div>
        <img src="/profile.png" className="rounded-full h-[1.3rem] w-[1.3rem]" alt="pic" />
      </div>
    </div>
  </nav>
);

export default Navigation;
