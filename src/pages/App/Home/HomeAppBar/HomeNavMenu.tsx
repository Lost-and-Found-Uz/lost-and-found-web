import React, { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import { useAppContext } from "../../../../context/AppContext";
import { useHistory } from "react-router";
import HomePostItemDialogButton from "../HomePostDialog/HomePostItemDialog";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomeNavMenu() {
  const { t } = useTranslation();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { dispatch } = useAppContext();

  const menuRef = React.createRef();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch({
      type: "logOutUser",
    });
    history.push("/");
  };

  return (
    <div>
      {/* <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        // onClick={handleClick}
      >
        <SearchIcon style={{ color: "#ffffff" }} fontSize="large" />
      </IconButton> */}
      <HomePostItemDialogButton />
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon style={{ color: "#ffffff" }} fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        ref={menuRef}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          {t("Profile")}
        </MenuItem>
        {/* <MenuItem onClick={handleClose} component={Link} to="/chats">
          Chats
        </MenuItem> */}
        <MenuItem onClick={handleLogOut}>{t("Logout")}</MenuItem>
      </Menu>
    </div>
  );
}
