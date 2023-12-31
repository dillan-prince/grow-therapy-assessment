import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Container, Typography, styled } from "@mui/material";
import { neutral } from "./colors";

export const Content = styled(Container)({
  maxWidth: "800px",
  paddingTop: "3.5rem",
  paddingBottom: "5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2.5rem",
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

export const Divider = styled(Box)({
  backgroundColor: neutral[300],
  width: "1px",
  height: "4rem",
});

export const CaretIcon = styled(FontAwesomeIcon)({
  fontWeight: 400,
  lineHeight: "0.75rem",
});
