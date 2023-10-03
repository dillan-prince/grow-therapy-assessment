import { Box, Container, Typography, styled } from "@mui/material";
import { NAVBAR_HEIGHT } from "../components/Navbar";
import { neutral } from "./colors";

export const Content = styled(Container)({
  maxWidth: "800px",
  paddingTop: "3.5rem",
  paddingBottom: "5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2.5rem",
  height: `calc(100% - ${NAVBAR_HEIGHT})`,
});

export const Header = styled(Typography)({
  color: neutral[900],
  textAlign: "center",
  fontFamily: "Lora",
  fontSize: "2.5rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "-0.8px",
});

export const FlexBox = styled(Box)({
  display: "flex",
});
