import { useSearchContext } from "../context/SearchContext";
import { white } from "../design/colors";
import { FlexBox } from "../design/styles";
import ArticlePreview from "./ArticlePreview";

const Results = () => {
  const { results, resultsSize, page } = useSearchContext();

  return (
    <FlexBox
      sx={{
        flexDirection: "column",
        padding: "2rem",
        gap: "1.25rem",
        borderRadius: { sm: "0px", md: "1rem" },
        backgroundColor: white,
        boxShadow: "0px 2px 0px 1px rgba(5, 9, 13, 0.06)",
        height: "100%",
      }}
    >
      {results
        .slice((page - 1) * resultsSize, page * resultsSize)
        .map(({ article, views, rank }, index) => (
          <ArticlePreview
            key={index}
            index={rank}
            name={article}
            views={views}
          />
        ))}
    </FlexBox>
  );
};

export default Results;
