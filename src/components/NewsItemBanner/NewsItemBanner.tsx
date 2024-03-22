import { NewsItem } from "../../services/news";
import styles from "./NewsItemBanner.module.scss";

interface NewsItemBannerProps {
  item: NewsItem;
}

const NewsItemBanner = (props: NewsItemBannerProps) => {
  const { item } = props;
  const imageUrl = item.imageUrl || "https://picsum.photos/640/360";
  return (
    <div
      data-testid="banner"
      className={styles.banner}
      style={{ backgroundImage: "url(" + imageUrl + ")" }}
    >
      <h1 className={styles.title}>{item.title}</h1>
    </div>
  );
};

export default NewsItemBanner;
