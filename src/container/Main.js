import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { GrHome } from "react-icons/gr";
import logo from "../images/onpoint.PNG";

function Main() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div
        className={
          location.pathname == "/"
            ? "background-gradient h-screen flex flex-col justify-between"
            : "first-slider-gradient h-screen flex flex-col justify-between"
        }
      >
        <div className="flex flex-row items-center space-x-4 px-16 py-4">
          <div className="pr-4 border-r-2 text-2xl m-0 border-r-black">
            <Link to="/">
              <GrHome />
            </Link>
          </div>
          <p className="text-2xl m-0">PROJECT</p>
        </div>
        <Outlet />
        <div className="px-16 py-4">
          <img src={logo} alt="onpoint" />
        </div>
      </div>
    </>
  );
}

export default Main;
