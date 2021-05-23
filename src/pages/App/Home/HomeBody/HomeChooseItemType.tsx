import React, { Dispatch, SetStateAction } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { regions } from "../../../../common/regions";
import { cases } from "../../../../common/variables";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      marginBottom: "10px",
      minWidth: 120,
      width: "100%",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function HomeChooseItemType({
  itemType,
  setItemType,
  includeAll,
}: {
  itemType: String;
  setItemType: Dispatch<SetStateAction<string>>;
  includeAll: Boolean;
}) {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setItemType(event.target.value as string);
  };

  const renderExcludeAll = () => {
    if (includeAll) {
      return cases.map((type, i) => (
        <MenuItem value={type} key={i}>
          {t(type)}
        </MenuItem>
      ));
    }

    return ["Lost", "Found"].map((type, i) => (
      <MenuItem value={type} key={i}>
        {t(type)}
      </MenuItem>
    ));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label" color="secondary">
        {t("Case")}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={itemType}
        onChange={handleChange}
        label="Region"
        color="secondary"
      >
        {renderExcludeAll()}
      </Select>
    </FormControl>
  );
}
