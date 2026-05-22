import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    if (!props.apiKey) {
      setLoading(false);
      return;
    }

    props.setProgress(30);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    if (!props.apiKey) {
      return;
    }

    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(nextPage);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center" style={{ margin: "100px 0px 0px 100px" }}>
        NewsMonkey - Top Headlines
      </h2>

      {!props.apiKey ? (
        <div className="alert alert-warning mt-4" role="alert">
          Missing News API key. Set <code>REACT_APP_NEWS_API</code> in your environment to load live news.
        </div>
      ) : loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="row">
            {articles.length === 0 ? (
              <div className="col-12 text-center">
                <h5>No news found for the selected criteria.</h5>
              </div>
            ) : (
              articles.map((element) =>
                element && element.url ? (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title || "No Title"}
                      description={element.description || "No Description"}
                      Url={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source?.name || "Unknown"}
                    />
                  </div>
                ) : null
              )
            )}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default News;
