import { useCallback, useEffect, useState } from "react";
import parseCsv from "../utils/parseCsv";

export type NewsItem = {
  id: string;
  title: string;
  popularity: number;
  timestamp: Date;
  imageUrl?: string;
};

const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadNewsFromSource = async () => {
      try {
        setLoading(true);
        const response = await fetch("/newsSource.csv");
        const result = await response.text();
        const news = parseCsv(result);
        setLoading(false);
        setNews(news);
      } catch (error) {
        console.error("Error loading news", error);
        setLoading(false);
      }
    };

    loadNewsFromSource();
  }, []);

  const getImportantNews = useCallback(() => {
    return [...news].sort((a, b) => b.popularity - a.popularity);
  }, [news]);

  const getRecentNews = useCallback(() => {
    return [...news].sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
    );
  }, [news]);

  return {
    importantNews: getImportantNews(),
    recentNews: getRecentNews(),
    isLoading,
  };
};

export default useNews;
