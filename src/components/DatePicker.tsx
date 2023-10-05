import { IconButton, Typography } from "@mui/material";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
  PickersCalendarHeaderProps,
  UseDateFieldProps,
} from "@mui/x-date-pickers";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import { green, ivy } from "../design/colors";
import { CaretIcon, FlexBox } from "../design/styles";
import CalendarIcon from "../icons/calendar.svg";
import MenuButton from "./MenuButton";

type ButtonFieldProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  date?: Dayjs;
};

const ButtonField = ({
  isOpen,
  setIsOpen,
  date,
  InputProps: { ref } = {},
  inputProps: { "aria-label": ariaLabel } = {},
}: ButtonFieldProps &
  UseDateFieldProps<Dayjs> &
  BaseSingleInputFieldProps<
    Dayjs | null,
    Dayjs,
    FieldSection,
    DateValidationError
  >) => (
  <MenuButton
    iconSrc={CalendarIcon}
    label="DATE"
    isOpen={isOpen ?? false}
    value={date?.format("MMMM DD, YYYY")}
    onClick={() => setIsOpen?.((previous) => !previous)}
    forwardedRef={ref}
    ariaLabel={ariaLabel}
  />
);

const CalendarHeader = (props: PickersCalendarHeaderProps<Dayjs>) => {
  console.log(props);
  return (
    <FlexBox
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <IconButton
        sx={{ width: "1.5rem", height: "1.5rem" }}
        size="small"
        onClick={() =>
          props.onMonthChange(
            dayjs(props.currentMonth).add(-1, "month"),
            "right"
          )
        }
      >
        <CaretIcon icon="chevron-left" />
      </IconButton>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "1.5rem",
        }}
      >
        {dayjs(props.currentMonth).format("MMMM YYYY")}
      </Typography>
      <IconButton
        sx={{ width: "1.5rem", height: "1.5rem" }}
        size="small"
        onClick={() =>
          props.onMonthChange(dayjs(props.currentMonth).add(1, "month"), "left")
        }
      >
        <CaretIcon icon="chevron-right" />
      </IconButton>
    </FlexBox>
  );
};

const DatePicker = () => {
  const { date, setDate } = useSearchContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <MuiDatePicker
      slots={{ field: ButtonField, calendarHeader: CalendarHeader }}
      slotProps={{
        field: { isOpen, setIsOpen, date } as any,
        popper: {
          sx: {
            ".MuiPaper-root": {
              borderRadius: "2rem",
              padding: "2rem 1rem",
              ".Mui-selected": {
                color: green[500],
                backgroundColor: ivy[300],
                "&.Mui-focusVisible": {
                  backgroundColor: ivy[300],
                },
                ":hover": {
                  backgroundColor: ivy[300],
                },
              },
            },
            ".MuiPickersDay-root": {
              fontFamily: "Poppins",
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: "1.375rem",
            },
          },
        },
      }}
      disableHighlightToday
      views={["day"]}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      onChange={(newDate) => setDate(newDate)}
      value={date}
      showDaysOutsideCurrentMonth
      dayOfWeekFormatter={(_, date) => date.format("ddd")}
    />
  );
};

export default DatePicker;
