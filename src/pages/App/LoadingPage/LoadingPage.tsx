import {
  Backdrop,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { LOADING_WRAPPER } from "../../../components/Loading/LoadingWrapper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <LOADING_WRAPPER>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </LOADING_WRAPPER>
  );
};

export default LoadingPage;
