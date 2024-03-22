import { NewsItem } from "../services/news";

const parseCsv = (csvString: string, delimiter = ";"): NewsItem[] => {
  const news = csvString
    .split("\r\n")
    .map((line: string) => line.split(delimiter))
    .map((item: string[]) => {
      const [id, title, popularity, timestamp] = item;
      return {
        id,
        title,
        popularity: parseFloat(popularity),
        timestamp: new Date(timestamp),
      };
    })
    .slice(1);

  return news;
};

export default parseCsv;
