import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import Results from "./components/Results";
import Search from "./components/Search";
import { neutral } from "./design/colors";
import { Content, FlexBox, Header } from "./design/styles";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ backgroundColor: neutral[200], height: "100vh" }}>
        <Navbar />
        <Content disableGutters maxWidth={false}>
          <Header>Top Wikipidia articles</Header>
          <FlexBox sx={{ flexDirection: "column", gap: "1.5rem", flex: 1 }}>
            <Search />
            <Box sx={{ flex: 1 }}>
              <Results />
            </Box>
          </FlexBox>
          <Pagination />
        </Content>
      </Box>
    </React.Fragment>
  );
}

export default App;
