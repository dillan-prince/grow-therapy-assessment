import { white } from "../design/colors";
import { FlexBox } from "../design/styles";
import ArticlePreview, { ArticlePreviewProps } from "./ArticlePreview";

const data: Omit<ArticlePreviewProps, "index">[] = [];

const Results = () => {
  return (
    <FlexBox
      sx={{
        flexDirection: "column",
        padding: "2rem",
        gap: "1.25rem",
        borderRadius: "1rem",
        backgroundColor: white,
        boxShadow: "0px 2px 0px 1px rgba(5, 9, 13, 0.06)",
        height: "100%",
      }}
    >
      {data.map((article, index) => (
        <ArticlePreview
          key={index}
          index={index + 1}
          name={article.name}
          views={article.views}
        />
      ))}
    </FlexBox>
  );
};

export default Results;
