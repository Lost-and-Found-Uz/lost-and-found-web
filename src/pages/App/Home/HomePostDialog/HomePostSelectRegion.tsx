import React, { Dispatch, SetStateAction } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { regions } from "../../../../common/regions";
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

export default function HomePostSelectRegion({
  region,
  setRegion,
}: {
  region: String;
  setRegion: Dispatch<SetStateAction<string>>;
}) {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRegion(event.target.value as string);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label" color="secondary">
        {t("Region")}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={region}
        onChange={handleChange}
        label="Region"
        color="secondary"
      >
        {regions.map((reg, i) => (
          <MenuItem value={reg} key={i}>
            {reg}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
