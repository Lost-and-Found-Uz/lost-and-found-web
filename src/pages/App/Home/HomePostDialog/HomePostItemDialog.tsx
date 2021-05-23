import React, { ChangeEvent, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { colors } from "../../../../common/colors";
import { HOME_POST_WRAPPER } from "../../../../components/Home/HomePostWrapper";
import ClearIcon from "@material-ui/icons/Clear";
import DatePicker from "../../../../components/Global/DatePicker";
import { InputAdornment, Snackbar, TextField } from "@material-ui/core";
import HomePostSelectRegion from "./HomePostSelectRegion";
import { useMutation } from "react-query";
import axios from "axios";
import { baseUrl } from "../../../../common/variables";
import { regions } from "../../../../common/regions";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { SnackType } from "../../../../types/ItemType";
import HomeChooseItemType from "../HomeBody/HomeChooseItemType";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";

// Classes
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      backgroundColor: colors.primary,
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

// ALERT
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// COMPONENT
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const cases = ["Lost", "Found"];

export default function HomePostItemDialogButton() {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [snack, setSnack] = useState(false);
  const [snackSeverity, setSnackSeverity] = useState<SnackType>("warning");
  const [snackMessage, setSnackMessage] = useState<string>(
    "Oops, something went wrong!"
  );

  const [itemType, setItemType] = useState(cases[0]);
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState(regions[0]);
  const [description, setDescription] = useState<String>("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const mutation = useMutation(() =>
    axios
      .post(baseUrl + "/api/item/createItem", {
        user: localStorage.getItem("userId"),
        case: itemType,
        phone,
        title,
        region,
        description: description,
        date: selectedDate,
      })
      .then((response) => {
        handleFormReset();
        history.go(0);
        handleSnackType({
          severity: "success",
          message: t("Upload successful!"),
        });
        setSnack(true);
      })
      .catch((err) => {
        const { response, request } = err;

        if (response) {
          alert(t("Bad request!"));
        } else if (request) {
          alert(t("Network error!"));
        } else {
          alert(t("Something went wrong!"));
        }
      })
  );

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePostBtn = () => {
    if (title && region && description && phone) {
      return mutation.mutate();
    }

    handleSnackType({
      severity: "warning",
      message: t("Please, fill out the form!"),
    });
    setSnack(true);
  };

  const handleFormReset = () => {
    setTitle("");
    setRegion("");
    setDescription("");
  };

  const handleSnackType = ({
    severity,
    message,
  }: {
    severity: SnackType;
    message: string;
  }) => {
    setSnackSeverity(severity);
    setSnackMessage(message);
  };

  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClickOpen}
      >
        <PostAddIcon style={{ color: "#ffffff" }} fontSize="large" />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {t("Announce")}
            </Typography>
            <Button autoFocus color="inherit" onClick={handlePostBtn}>
              {t("Post")}
            </Button>
          </Toolbar>
        </AppBar>
        <HOME_POST_WRAPPER>
          <HomeChooseItemType
            itemType={itemType}
            setItemType={setItemType}
            includeAll={false}
          />
          <TextField
            type="text"
            id="title"
            label={t("Title")}
            variant="outlined"
            style={{ marginBottom: "10px" }}
            color="secondary"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <HomePostSelectRegion region={region} setRegion={setRegion} />
          <TextField
            type="text"
            id="description"
            label={t("Description")}
            variant="outlined"
            style={{ marginBottom: "10px" }}
            color="secondary"
            onChange={(event) => setDescription(event.target.value)}
            InputProps={{
              endAdornment: description && (
                <InputAdornment position="end">
                  <IconButton onClick={() => setDescription("")}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={description}
          />
          <TextField
            type="tel"
            id="phone"
            label={t("Phone")}
            variant="outlined"
            style={{ marginBottom: "10px" }}
            color="secondary"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <DatePicker
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </HOME_POST_WRAPPER>
      </Dialog>
      <Snackbar
        open={snack}
        autoHideDuration={6000}
        onClose={() => setSnack(false)}
      >
        <Alert onClose={() => setSnack(false)} severity={snackSeverity}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
