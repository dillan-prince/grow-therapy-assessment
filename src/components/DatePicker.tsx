import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
  UseDateFieldProps,
} from "@mui/x-date-pickers";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { useSearchContext } from "../context/SearchContext";
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

const DatePicker = () => {
  const { date, setDate } = useSearchContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <MuiDatePicker
      slots={{ field: ButtonField }}
      slotProps={{ field: { isOpen, setIsOpen, date } as any }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      onChange={(newDate) => setDate(newDate)}
      value={date}
    />
  );
};

export default DatePicker;
