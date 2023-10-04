import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { useMemo } from "react";
import { useSearchContext } from "../context/SearchContext";
import { NUM_RESULTS } from "../context/SearchContext.utils";
import { CaretIcon, FlexBox } from "../design/styles";

const ArrowButtonLeft = () => <CaretIcon icon={"chevron-left"} />;
const ArrowButtonRight = () => <CaretIcon icon={"chevron-right"} />;

const Pagination = () => {
  const { page, setPage, resultsSize } = useSearchContext();

  const numPages = useMemo(() => NUM_RESULTS / resultsSize, [resultsSize]);

  return (
    <FlexBox sx={{ justifyContent: "center" }}>
      <MuiPagination
        count={numPages}
        page={page}
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
