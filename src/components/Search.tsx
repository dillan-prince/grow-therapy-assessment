import { Box } from "@mui/material";
import { white } from "../design/colors";
import { FlexBox } from "../design/styles";
import DatePicker from "./DatePicker";

const Search = () => {
  return (
    <FlexBox
      sx={{
        padding: "1rem",
        backgroundColor: white,
        alignItems: "center",
        gap: "1rem",
        borderRadius: "100px",
        boxShadow: "0px 2px 0px 1px rgba(5, 9, 13, 0.06)",
      }}
    >
      <DatePicker />
      <Box>Divider</Box>
      <Box>Select</Box>
      <Box>Button</Box>
    </FlexBox>
  );
};

export default Search;
