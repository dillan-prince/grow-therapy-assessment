import { Menu, MenuItem, styled } from "@mui/material";
import { useMemo, useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import { RESULTS_SIZES } from "../context/SearchContext.utils";
import ListIcon from "../icons/list.svg";
import MenuButton from "./MenuButton";

const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    minWidth: "200px",
    padding: "2rem 1rem",
    borderRadius: "1.5rem",
    boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
    "& .MuiList-root": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
      padding: 0,
      "& .MuiMenuItem-root": {
        justifyContent: "center",
        padding: 0,
      },
    },
  },
});

const ResultsSizeSelect = () => {
  const { resultsSize, setResultsSize } = useSearchContext();

  const [anchor, setAnchor] = useState<HTMLElement>();

  const isOpen = useMemo(() => Boolean(anchor), [anchor]);

  const handleMenuClose = () => setAnchor(undefined);

  const handleMenuItemClick = (value: number) => {
    setResultsSize(value);
    handleMenuClose();
  };

  return (
    <>
      <MenuButton
        iconSrc={ListIcon}
        label="NUM RESULTS"
        isOpen={isOpen}
        value={resultsSize.toString()}
        onClick={(e) => setAnchor(e.currentTarget)}
      />
      <StyledMenu anchorEl={anchor} open={isOpen} onClose={handleMenuClose}>
        {RESULTS_SIZES.map((value) => (
          <MenuItem
            key={value}
            sx={{ width: "100%" }}
            onClick={() => handleMenuItemClick(value)}
            disableRipple
          >
            {value}
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default ResultsSizeSelect;
