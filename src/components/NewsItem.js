import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description, Url, newsUrl, date, author, source } = this.props
    let newDate = new Date(date).toGMTString();
    return (
      <div className="my-3">
        <div className="card" >
          <img src={Url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title ">{title} </h5>
            <p className="card-text text-c f,.rz">
              {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">by {author} on {newDate}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
