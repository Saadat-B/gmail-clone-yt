import React from "react";
import "./Header.css";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import Apps from "@mui/icons-material/Apps";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
