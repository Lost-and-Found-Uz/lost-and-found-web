import "date-fns";
import React, { Dispatch, SetStateAction } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { useTranslation } from "react-i18next";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: pink,
  },
});

export default function DatePicker({
  selectedDate,
  setSelectedDate,
}: {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
}) {
  const { t } = useTranslation();
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          variant="dialog"
          color="secondary"
          inputVariant="outlined"
          id="date-picker-dialog"
          label={t("Date")}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          maxDate={new Date()}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}
