import { neutral } from "../design/colors";
import { FlexBox } from "../design/styles";
import ArticlePreview, { ArticlePreviewProps } from "./ArticlePreview";

const data: Omit<ArticlePreviewProps, "index">[] = [
  {
    name: "The Last of Us (TV Show)",
    views: 2560128,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
  {
    name: "Chat GPT",
    views: 2000001,
  },
];

const Results = () => {
  return (
    <FlexBox
      sx={{
        flexDirection: "column",
        padding: "2rem",
        gap: "1.25rem",
        borderRadius: "1rem",
        backgroundColor: neutral[0],
        boxShadow: "0px 2px 0px 1px rgba(5, 9, 13, 0.06)",
        height: "100%",
        overflowY: "auto",
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
