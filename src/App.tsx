import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Box, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Results from "./components/Results";
import Search from "./components/Search";
import { SearchContextProvider } from "./context/SearchContext";
import { neutral } from "./design/colors";
import { Content, FlexBox, Header } from "./design/styles";

library.add(faChevronUp, faChevronDown);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
      <SearchContextProvider>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: neutral[200],
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Navbar />
          <Content disableGutters maxWidth={false}>
            <Header>Top Wikipedia articles</Header>
            <FlexBox sx={{ flexDirection: "column", gap: "1.5rem" }}>
              <Search />
              <Results />
            </FlexBox>
            <Pagination />
          </Content>
        </Box>
      </SearchContextProvider>
    </LocalizationProvider>
  );
}

export default App;
