import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";
import { HOME_ITEM_INFO_WRAPPER } from "../../../../components/Home/HomeItemInfoDialog/HomeItemInfoDialog";
import { HOME_ITEM_INFO_PROFILE_WRAPPER } from "../../../../components/Home/HomeItemInfoDialog/HomeItemInfoProfile";
import { Item } from "../../../../types/ItemType";
import {
  getParsedDate,
  getParsedMonthDate,
  getParsedTime,
} from "../../../../functions/timeParsers";
import { Text } from "../../../../components/Global/Text";
import { Wrapper } from "../../../../components/Global/Wrapper";
import { useTranslation } from "react-i18next";

export const HomeItemInfoDialog: React.FC<Item> = (item) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => setOpen(false);

  const descriptionElementRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const itemDate = getParsedDate(item.date);

  return (
    <div>
      <ListItem button onClick={handleClickOpen("paper")}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.title} secondary={itemDate} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <a href={`tel: ${item.user.phone}`} style={{ color: "black" }}>
              <CallIcon />
            </a>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{t("Details")}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <HOME_ITEM_INFO_WRAPPER>
            <HOME_ITEM_INFO_PROFILE_WRAPPER>
              <Wrapper displayType="flex" alignment="center">
                <Text fontSize="20px" fontWeight="600">
                  {item.title}
                </Text>
              </Wrapper>
              <IconButton edge="end" aria-label="delete">
                <a href={`tel: ${item.user.phone}`} style={{ color: "black" }}>
                  <CallIcon />
                </a>
              </IconButton>
            </HOME_ITEM_INFO_PROFILE_WRAPPER>
            <Divider />
            <Wrapper
              height="40px"
              displayType="flex"
              contentJustification="space-between"
              alignment="center"
            >
              <Text>{t("Posted by")}: </Text>
              <Text fontWeight="600">{item.user.fullName}</Text>
            </Wrapper>
            <Wrapper
              height="40px"
              displayType="flex"
              contentJustification="space-between"
              alignment="center"
            >
              <Text>{t("Posted at")}: </Text>
              <Text fontWeight="600">{` ${getParsedMonthDate(
                item.date
              )} (${getParsedTime(item.date)})`}</Text>
            </Wrapper>
            <Wrapper
              height="40px"
              displayType="flex"
              contentJustification="space-between"
              alignment="center"
            >
              <Text>{t("Phone")}: </Text>
              <Text fontWeight="600">{item.user.phone}</Text>
            </Wrapper>
            <Wrapper
              displayType="flex"
              flexDirection="column"
              contentJustification="space-between"
            >
              <Text margin="10px 0px 10px 0px">{t("Description")}: </Text>
              <Text fontWeight="600">{item.description}</Text>
            </Wrapper>
          </HOME_ITEM_INFO_WRAPPER>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            {t("Close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
