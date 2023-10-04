import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { black, neutral } from "../design/colors";
import { CaretIcon, FlexBox } from "../design/styles";

type MenuButtonProps = {
  iconSrc: string;
  label: string;
  isOpen: boolean;
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  forwardedRef?: React.Ref<any>;
  ariaLabel?: string;
};

const MenuButton = ({
  iconSrc,
  label,
  isOpen,
  value,
  onClick,
  forwardedRef,
  ariaLabel,
}: MenuButtonProps) => {
  return (
    <Button
      sx={{
        display: "flex",
        gap: "1.5rem",
        padding: "0.75rem",
        textTransform: "none",
        borderRadius: "100px",
        minWidth: "260px",
        justifyContent: "flex-start",
        ":hover": {
          backgroundColor: neutral[200],
        },
      }}
      onClick={onClick}
      ref={forwardedRef}
      aria-label={ariaLabel}
      disableRipple
    >
      <Box
        component="img"
        sx={{ width: "3rem", height: "3rem" }}
        src={iconSrc}
      />
      <FlexBox
        sx={{ flexDirection: "column", alignItems: "flex-start", gap: "2px" }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "0.75rem",
            fontWeight: 500,
            lineHeight: "1rem",
            letterSpacing: "0.6px",
            color: neutral[500],
          }}
        >
          {label} <CaretIcon icon={isOpen ? "chevron-up" : "chevron-down"} />
        </Typography>
        {value && (
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: 400,
              lineHeight: "1.5rem",
              letterSpacing: "-0.32px",
              color: black,
            }}
          >
            {value}
          </Typography>
        )}
      </FlexBox>
    </Button>
  );
};

export default MenuButton;
