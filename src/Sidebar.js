import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
import PersonIcon from "@material-ui/icons/Person";
import { Button, IconButton } from "@material-ui/core";
import SidebarOption from "./SidebarOption";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <NavLink to="/" exact activeClassName="active-link">
        <SidebarOption Icon={InboxIcon} title="Inbox" number={2889} />
      </NavLink>

      <NavLink to="/b" exact activeClassName="active-link">
        <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      </NavLink>

      <NavLink to="/c" exact activeClassName="active-link">
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      </NavLink>

      <NavLink to="/d" exact activeClassName="active-link">
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={9} />
      </NavLink>

      <NavLink to="/e" exact activeClassName="active-link">
        <SidebarOption Icon={NearMeIcon} title="Sent" number={77} />
      </NavLink>

      <NavLink to="/f" exact activeClassName="active-link">
        <SidebarOption Icon={NoteIcon} title="Drafts" number={20} />
      </NavLink>

      <NavLink to="/g" exact activeClassName="active-link">
        <SidebarOption Icon={ExpandMoreIcon} title="More" />
      </NavLink>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
