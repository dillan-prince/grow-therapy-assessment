import dayjs, { Dayjs } from "dayjs";
import { enqueueSnackbar } from "notistack";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DEFAULT_RESULTS_SIZE,
  Result,
  SearchResponse,
  formatFetchUrl,
  getYesterday,
} from "./SearchContext.utils";

type SearchContextType = {
  date: Dayjs | null;
  setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  resultsSize: number;
  setResultsSize: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  results: Result[];
  search: () => void;
};

const SearchContext = createContext<SearchContextType>({
  date: dayjs(getYesterday()),
  setDate: () => {},
  resultsSize: DEFAULT_RESULTS_SIZE,
  setResultsSize: () => {},
  page: 0,
  setPage: () => {},
  results: [],
  search: () => {},
});

export const SearchContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [date, setDate] = useState<Dayjs | null>(getYesterday());
  const [resultsSize, setResultsSize] = useState<number>(DEFAULT_RESULTS_SIZE);
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<Result[]>([]);

  const search = async () => {
    const response = await fetch(formatFetchUrl(date ?? getYesterday()));
    const { detail, items }: SearchResponse = await response.json();

    if (detail) {
      enqueueSnackbar({ message: detail, variant: "error" });
    } else {
      setResults(items[0].articles);
      setPage(1);
    }
  };

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SearchContext.Provider
      value={{
        date,
        setDate,
        resultsSize,
        setResultsSize,
        page,
        setPage,
        results,
        search,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
