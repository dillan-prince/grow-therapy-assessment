import { Dayjs } from "dayjs";

export type ViewCountData = {
  timestamp: "string";
  views: number;
};

export type SearchByArticleAndMonthResponse = {
  items: ViewCountData[];
};

export const searchByArticleAndMonthUrl = (
  articleName: string,
  date: Dayjs
) => {
  const yearMonth = date.format("YYYYMM");
  const numDaysInMonth = date.daysInMonth();
  return `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/${articleName}/daily/${yearMonth}0100/${yearMonth}${numDaysInMonth}00`;
};

export type ArticleDescriptionResponse = {
  extract: string;
};

export const getArticleDescriptionUrl = (articleName: string) =>
  `https://en.wikipedia.org/api/rest_v1/page/summary/${articleName}`;
