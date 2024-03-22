import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsItemBanner from "../components/NewsItemBanner/NewsItemBanner";
import { NewsItem } from "../services/news";

describe("NewsItemBanner", () => {
  const article: NewsItem = {
    id: "1",
    title: "Test News Title",
    popularity: 1,
    timestamp: new Date("2024-03-22T12:00:00Z"),
    imageUrl: "https://example.com/test-image.jpg",
  };

  it("renders the title", () => {
    render(<NewsItemBanner item={article} />);
    expect(screen.getByText("Test News Title")).toBeInTheDocument();
  });

  it("renders the image for the most popular item", () => {
    render(<NewsItemBanner item={article} />);
    const banner = screen.getByTestId("banner");
    expect(banner).toHaveStyle(
      "background-image: url(https://example.com/test-image.jpg)"
    );
  });
});
