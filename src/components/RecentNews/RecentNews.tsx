import { useEffect, useState } from "react";
import { NewsItem } from "../../services/news";
import styles from "./RecentNews.module.scss";
import ThemeSwitch from "../ThemeSwitch";

interface RecentNewsProps {
  news: NewsItem[];
}

const RecentNews = (props: RecentNewsProps) => {
  const { news } = props;

  const [visibleNews, setVisibleNews] = useState(news);
  useEffect(() => {
    const updateListBasedOnScreenSize = () => {
      const screenWidth = window.innerWidth;
      let itemsToShow = news.length;
      if (screenWidth < 600) {
        itemsToShow = 5;
      } else if (screenWidth < 1024) {
        itemsToShow = 8;
      }
      setVisibleNews(news.slice(0, itemsToShow));
    };

    window.addEventListener("resize", updateListBasedOnScreenSize);
    updateListBasedOnScreenSize();

    return () => {
      window.removeEventListener("resize", updateListBasedOnScreenSize);
    };
  }, [news]);

  return (
    <>
      <h1 className={styles.listHeader}>
        <span className={styles.title}>
          Recent News
          <span className={styles.liveIcon}></span>
        </span>
        <ThemeSwitch />
      </h1>
      <ul className={styles.news}>
        {visibleNews.map((item) => {
          const formattedDate = item.timestamp
            .toTimeString()
            .split(" ")[0]
            .split(":")
            .slice(0, 2)
            .join(":");
          return (
            <li key={item.id} className={styles.newsItem}>
              <span className={styles.date}>{formattedDate}</span>
              <h3 className={styles.title}>{item.title}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RecentNews;
