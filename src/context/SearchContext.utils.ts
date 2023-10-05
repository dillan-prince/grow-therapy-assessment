import dayjs, { Dayjs } from "dayjs";

export const RESULTS_SIZES = [25, 50, 75, 100, 200];
export const DEFAULT_RESULTS_SIZE = 100;
export const NUM_RESULTS = 1000;

export type Result = {
  article: string;
  rank: number;
  views: number;
};

export type SearchByDateResponse = {
  detail?: string;
  items: {
    articles: Result[];
  }[];
};

export const getYesterday = () => dayjs().add(-1, "day");

export const searchByDateUrl = (date: Dayjs) =>
  `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${date.format(
    "YYYY/MM/DD"
  )}`;
