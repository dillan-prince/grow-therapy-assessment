import { Button } from "@mui/material";
import { useSearchContext } from "../context/SearchContext";
import { green, white } from "../design/colors";
import { Divider, FlexBox } from "../design/styles";
import DatePicker from "./DatePicker";
import ResultsSizeSelect from "./ResultsSizeSelect";

const Search = () => {
  const { search } = useSearchContext();

  return (
    <FlexBox
      sx={{
        padding: "1rem",
        backgroundColor: white,
        alignItems: "center",
        gap: "1rem",
        borderRadius: { xs: "0px", md: "100px" },
        boxShadow: "0px 2px 0px 1px rgba(5, 9, 13, 0.06)",
        flexWrap: "wrap",
      }}
    >
      <DatePicker />
      <Divider sx={{ display: { xs: "none", md: "block" } }} />
      <ResultsSizeSelect />
      <Button
        sx={{
          padding: "0.75rem 1.5rem",
          textTransform: "none",
          width: "10rem",
          flex: 1,
          alignSelf: "stretch",
          borderRadius: "100px",
          backgroundColor: green[500],
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "1.5rem",
          letterSpacing: "-0.32px",
          color: white,
          ":hover": {
            backgroundColor: green[700],
          },
        }}
        disableRipple
        onClick={search}
      >
        Search
      </Button>
    </FlexBox>
  );
};

export default Search;
