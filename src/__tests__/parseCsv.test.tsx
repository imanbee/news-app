import parseCsv from "../utils/parseCsv";

describe("parseCsv", () => {
  it("converts CSV string to NewsItem array", () => {
    const csv =
      "id,title,popularity,timestamp,imageUrl\r\n1,Test News,1,2024-03-22T12:00:00Z,https://example.com/test-image.jpg";
    const expectedOutput = [
      {
        id: "1",
        title: "Test News",
        popularity: 1,
        timestamp: new Date("2024-03-22T12:00:00Z"),
      },
    ];

    expect(parseCsv(csv, ",")).toEqual(expectedOutput);
  });
});
