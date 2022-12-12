import React from "react";
import "./EmailRow.css";
import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
const EmailRow = ({ title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <IconButton>
          <CheckBoxOutlineBlank />
        </IconButton>
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__description">{time}</div>
    </div>
  );
};

export default EmailRow;
