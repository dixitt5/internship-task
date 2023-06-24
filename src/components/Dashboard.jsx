import React from "react";
import BlackMenu from "./BlackMenu";
import Navigation from "./Navigation";
import { LineChart_ } from "./Charts";
import Tab from "./Tab";
import Schedules from "./Schedules";
import TopProducts from "./TopProducts";
import { TbCashBanknote } from "react-icons/tb";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-[#F5F5F5]">
      <div className="h-[94vh] w-[20%] bg-black m-[3vh] rounded-[20px]">
        <div className="filter invert-[100%] flex justify-center items-center flex-col">
          <h1 className="m-[3rem] flex items-center cursor-pointer text-black text-3xl font-[700]">
            Board.
          </h1>
          <BlackMenu />
        </div>
      </div>
      <div className="w-[80%] h-[94vh] mx-[3vh] flex flex-col">
        <div className="dashboard-header">
          <Navigation />
          <div className="flex flex-row justify-between mt-8 mb-8 text-black">
            <Tab
              icon_name={<TbCashBanknote className="ml-[90%]" />}
              tab_name={"revenue"}
            >
              <div className="tab-content">
                <h5 className="my-0">Total Revenue</h5>
                <h3 className="my-0">$2,129,430</h3>
              </div>
            </Tab>
            <Tab
              icon_name={<BsTags className="ml-[90%]" />}
              tab_name={"transactions"}
            >
              <div className="tab-content">
                <h5 className="my-0">Total Transactions</h5>
                <h3 className="my-0">1,520</h3>
              </div>
            </Tab>
            <Tab
              icon_name={<FiUsers className="ml-[90%]" />}
              tab_name={"likes"}
            >
              {" "}
              <div className="tab-content">
                <h5 className="my-0">Total Likes</h5>
                <h3 className="my-0">9,721</h3>
              </div>
            </Tab>
            <Tab
              icon_name={<AiOutlineLike className="ml-[90%]" />}
              tab_name={"users"}
            >
              <div className="tab-content">
                <h5 className="my-0">Total Users</h5>
                <h3 className="my-0">892</h3>
              </div>
            </Tab>
          </div>
        </div>
        <div className="bg-white rounded-[10px] mb-[2.2vh] text-black">
          <div className="ml-[4rem] flex items-center">
            <h3 className="font-[600]">Activities</h3>
            <div className="flex flex-row mb-auto w-[10rem]  p-4">
              <div className="w-[4rem] m-0 flex flex-row items-center justify-end">
              <div class="w-2 h-2 bg-green-800 rounded-full ml-2 mr-2"></div>
                <h5>Guest</h5>
              </div>

              <div className="w-[4rem] m-0 flex flex-row items-center">
                {/* <div className="h-[0.5rem] w-[0.5rem]mr-[5px] rounded-[50%] bg-red-800"></div> */}
                <div class="w-2 h-2 bg-red-800 rounded-full ml-3 mr-2"></div>
                <h5>User</h5>
              </div>
            </div>
          </div>
          <LineChart_ />
        </div>
        <div className="flex flex-row w-[100%] h-[28vh] justify-between text-black">
          <TopProducts />
          <Schedules />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
