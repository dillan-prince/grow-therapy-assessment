import {
  Box,
  Pagination as MuiPagination,
  PaginationItem,
  styled,
} from "@mui/material";
import { useMemo } from "react";
import { useSearchContext } from "../context/SearchContext";
import { NUM_RESULTS } from "../context/SearchContext.utils";
import { avocado, green, neutral, white } from "../design/colors";
import { CaretIcon, FlexBox } from "../design/styles";

const ArrowButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "2.5rem",
  height: "2.5rem",
  padding: "0.625rem",
  borderRadius: "100px",
  border: `1px solid ${neutral[400]}`,
  background: white,
});

const StyledCaretIcon = styled(CaretIcon)({
  color: green[500],
});

const ArrowButtonLeft = () => (
  <ArrowButton>
    <StyledCaretIcon icon={"chevron-left"} />
  </ArrowButton>
);
const ArrowButtonRight = () => (
  <ArrowButton>
    <StyledCaretIcon icon={"chevron-right"} />
  </ArrowButton>
);

const Pagination = () => {
  const { page, setPage, resultsSize } = useSearchContext();

  const numPages = useMemo(() => NUM_RESULTS / resultsSize, [resultsSize]);

  return (
    <FlexBox sx={{ justifyContent: "center", alignItems: "center" }}>
      <MuiPagination
        sx={{
          ".MuiPaginationItem-previousNext": {
            padding: 0,
            ":first-child": {
              marginRight: "1.5rem",
            },
            ":last-child": {
              marginLeft: "1.5rem",
            },
          },
          ".MuiPaginationItem-root": {
            display: "flex",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            fontFamily: "Poppins",
            fontWeight: 600,
            lineHeight: "1.5rem",
            letterSpacing: "-0.28px",
            backgroundColor: white,
            "&.Mui-selected": {
              backgroundColor: avocado[300],
            },
          },
          ".MuiPaginationItem-ellipsis": {
            backgroundColor: "transparent",
            padding: "5px",
          },
        }}
        count={numPages}
        page={page}
        size="large"
        variant="outlined"
        onChange={(_, newPage) => setPage(newPage)}
        renderItem={(item) => (
          <PaginationItem
            slots={{
              previous: ArrowButtonLeft,
              next: ArrowButtonRight,
            }}
            {...item}
          />
        )}
      />
    </FlexBox>
  );
};

export default Pagination;
