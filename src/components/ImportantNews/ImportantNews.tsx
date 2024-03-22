import { useEffect, useState } from "react";
import { NewsItem } from "../../services/news";
import NewsItemBanner from "../NewsItemBanner";
import styles from "./ImportantNews.module.scss";

interface ImportantNewsProps {
  news: NewsItem[];
}

const ImportantNews = (props: ImportantNewsProps) => {
  const { news } = props;

  const [visibleNews, setVisibleNews] = useState(news);
  useEffect(() => {
    const updateListBasedOnScreenSize = () => {
      const screenWidth = window.innerWidth;
      let itemsToShow;
      if (screenWidth < 600) {
        itemsToShow = 3;
      } else if (screenWidth < 1024) {
        itemsToShow = 5;
      } else {
        itemsToShow = 10;
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
      <h1 className={styles.listHeader}>Main themes</h1>
      <ul className={styles.news}>
        {visibleNews.map((item, index) => {
          if (index === 0) {
            return (
              <li key={item.id}>
                <NewsItemBanner key={item.id} item={item} />
              </li>
            );
          }
          return (
            <li key={item.id} className={styles.newsItem}>
              <a href={item.title}>
                <h2 className={styles.title}>{item.title}</h2>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ImportantNews;
