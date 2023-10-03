import { Box } from "@mui/material";
import { neutral } from "../design/colors";

export const NAVBAR_HEIGHT = "5rem";

const Navbar = () => {
  return (
    <Box
      sx={() => ({
        display: "flex",
        alignItems: "center",
        padding: "1rem 3rem",
        gap: "0.5rem",
        height: NAVBAR_HEIGHT,
        backgroundColor: neutral[0],
        boxShadow: "0px 2px 0px 0px rgba(2, 91, 75, 0.10)",
      })}
    ></Box>
  );
};

export default Navbar;
