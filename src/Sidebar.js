import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import "./Sidebar.css";
import Inbox from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import Star from "@mui/icons-material/Star";
import {
  AccessTime,
  Duo,
  ExpandMore,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        style={{ color: "black" }}
        className="sidebar__compose"
        startIcon={<Add fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
