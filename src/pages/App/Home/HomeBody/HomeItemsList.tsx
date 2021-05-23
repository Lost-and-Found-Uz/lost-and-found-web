import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Item } from "../../../../types/ItemType";
import { HomeItemInfoDialog } from "./HomeItemInfoDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      backgroundColor: theme.palette.background.paper,
      padding: "0px 10px",
    },
  })
);

export default function HomeItemsList(data: any) {
  const classes = useStyles();
  const {
    data: { results },
  }: { data: { results: Item[] } } = data;

  return (
    <div className={classes.root}>
      {data &&
        data.data.results.map((item: Item) => {
          return (
            <List aria-label="main mailbox folders" key={item._id}>
              <HomeItemInfoDialog {...item} />
            </List>
          );
        })}
    </div>
  );
}
