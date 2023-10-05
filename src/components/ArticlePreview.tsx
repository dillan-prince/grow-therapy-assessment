import { Box, CircularProgress, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { black, marigold, neutral } from "../design/colors";
import { FlexBox } from "../design/styles";
import {
  ArticleDescriptionResponse,
  SearchByArticleAndMonthResponse,
  ViewCountData,
  getArticleDescriptionUrl,
  searchByArticleAndMonthUrl,
} from "./ArticlePreview.utils";

export type ArticlePreviewProps = {
  index: number;
  name: string;
  views: number;
};

const ArticlePreview = ({ index, name, views }: ArticlePreviewProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentPreview, setContentPreview] = useState<string>();
  const [viewCountData, setViewCountData] = useState<ViewCountData[]>();

  useEffect(() => {
    setIsExpanded(false);
  }, [name]);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const fetchViewCountData = async () => {
      const response = await fetch(searchByArticleAndMonthUrl(name, dayjs()));
      const data: SearchByArticleAndMonthResponse = await response.json();

      setViewCountData(
        data.items.sort((a, b) => b.views - a.views).slice(0, 3)
      );
    };

    const fetchDescription = async () => {
      const response = await fetch(getArticleDescriptionUrl(name));
      if (response.status >= 400) {
        return setContentPreview("Could not find a summary for this article.");
      }

      const data: ArticleDescriptionResponse = await response.json();

      setContentPreview(data.extract);
    };

    fetchDescription();
    fetchViewCountData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  return (
    <FlexBox
      sx={{
        boxSizing: "border-box",
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
          alignSelf: "flex-start",
        }}
      >
        {index}
      </Typography>
      <FlexBox sx={{ flexDirection: "column", gap: "1.25rem", flex: 1 }}>
        <FlexBox sx={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              flex: 1,
              fontFamily: "Lora",
              fontSize: "1rem",
              fontWeight: 500,
              lineHeight: "1.5rem",
              color: black,
              cursor: "pointer",
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {name.replaceAll("_", " ")}
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
        {isExpanded && (
          <>
            {contentPreview !== undefined ? (
              <Typography
                sx={{
                  color: neutral[600],
                  fontFamily: "Poppins",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  letterSpacing: "-0.28px",
                }}
              >
                {contentPreview}
              </Typography>
            ) : (
              <CircularProgress />
            )}
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundColor: neutral[400],
              }}
            />
            <FlexBox sx={{ flexDirection: "column", gap: "1rem" }}>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "Poppins",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  lineHeight: "1.5rem",
                  letterSpacing: "0.12px",
                }}
              >
                top views this month
              </Typography>
              {!viewCountData ? (
                <CircularProgress />
              ) : (
                viewCountData.map(({ timestamp, views }) => (
                  <FlexBox
                    key={timestamp}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: "1rem",
                        letterSpacing: "-0.28px",
                      }}
                    >
                      {dayjs(timestamp).format("MMMM D, YYYY")}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        textAlign: "right",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        lineHeight: "1rem",
                        color: marigold[500],
                      }}
                    >
                      {views.toLocaleString()} views
                    </Typography>
                  </FlexBox>
                ))
              )}
            </FlexBox>
          </>
        )}
      </FlexBox>
    </FlexBox>
  );
};

export default ArticlePreview;
