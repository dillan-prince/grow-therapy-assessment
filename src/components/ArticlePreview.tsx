import { Typography } from "@mui/material";
import { neutral } from "../design/colors";
import { FlexBox } from "../design/styles";

export type ArticlePreviewProps = {
  index: number;
  name: string;
  views: number;
};

const ArticlePreview = ({ index, name, views }: ArticlePreviewProps) => {
  return (
    <FlexBox
      sx={{
        padding: "1.5rem",
        gap: "1.25rem",
        borderRadius: "0.75rem",
        border: `1px solid ${neutral[300]}`,
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          width: "1.25rem",
          fontFamily: "Lora",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "1.5rem",
          color: neutral[500],
        }}
      >
        {index}
      </Typography>
      <Typography
        sx={{
          flex: 1,
          fontFamily: "Lora",
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "1.5rem",
          color: neutral[1000],
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          textAlign: "right",
          fontFamily: "Poppins",
          fontSize: "0.875rem",
          fontWeight: "400",
          lineHeight: "1rem",
          color: neutral[600],
        }}
      >
        {views.toLocaleString()} views
      </Typography>
    </FlexBox>
  );
};

export default ArticlePreview;
