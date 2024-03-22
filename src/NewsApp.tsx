import ImportantNews from "./components/ImportantNews";
import RecentNews from "./components/RecentNews";
import useNews from "./services/news";
import styles from "./NewsApp.module.scss";

const NewsApp = () => {
  const { isLoading, importantNews, recentNews } = useNews();
  return (
    <>
      <main className={`${styles.main}`}>
        <section className={`${styles.section}`}>
          {isLoading && <p>Loading...</p>}
          {!isLoading && <ImportantNews news={importantNews} />}
        </section>
        <section className={`${styles.section} ${styles.sectionSecondary}`}>
          {!isLoading && <RecentNews news={recentNews} />}
        </section>
      </main>
    </>
  );
};

export default NewsApp;
