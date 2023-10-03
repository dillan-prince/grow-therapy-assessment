import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import {
  BaseSingleInputFieldProps,
  DateValidationError,
  FieldSection,
  UseDateFieldProps,
} from "@mui/x-date-pickers";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { FlexBox } from "../design/styles";

type ButtonFieldProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ButtonField = ({
  isOpen,
  setIsOpen,
  InputProps: { ref } = {},
  inputProps: { "aria-label": ariaLabel } = {},
}: ButtonFieldProps &
  UseDateFieldProps<Dayjs> &
  BaseSingleInputFieldProps<
    Dayjs | null,
    Dayjs,
    FieldSection,
    DateValidationError
  >) => {
  return (
    <Button
      sx={{
        display: "flex",
        gap: "1.5rem",
        padding: "0.75rem",
        textTransform: "none",
        borderRadius: "100px",
        backgroundColor: green[100],
      }}
      onClick={() => setIsOpen?.((previous) => !previous)}
      ref={ref}
      aria-label={ariaLabel}
    >
      <Box sx={{ width: "3rem", height: "3rem" }}></Box>
      <FlexBox sx={{ flexDirection: "column" }}>
        <Typography>
          DATE <FontAwesomeIcon icon={isOpen ? "chevron-up" : "chevron-down"} />
        </Typography>
      </FlexBox>
    </Button>
  );
};

const DatePicker = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MuiDatePicker
      slots={{ field: ButtonField }}
      slotProps={{ field: { isOpen, setIsOpen } as any }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    />
  );
};

export default DatePicker;
