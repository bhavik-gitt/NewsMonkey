import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    this.props.setProgress(30)
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/everything?q=apple&from=2025-05-21&to=2025-05-21&sortBy=popularity&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    const url = `https://newsapi.org/v2/everything?q=apple&from=2025-05-21&to=2025-05-21&sortBy=popularity&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: nextPage,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "100px 0px 0px 100px" }}>
          NewsMonkey - Top Headlines
        </h2>

        {this.state.loading ? (
          <Spinner />
        ) : (
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            style={{ overflow: "hidden" }}
          >
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    Url={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

export default News;
