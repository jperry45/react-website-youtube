import React, { useState } from 'react';
import './NEASubSection.css';
import { Button } from './Button';
import Pagination from './Pagination';

export default class APODSubSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render() {
    let pagination;
    if (this.state.items !== undefined && this.state.items.length != 0) {
      pagination = <Pagination
          data={this.state.items}
          RenderComponent={this.item}
          title="Items"
          pageLimit={5}
          dataLimit={4}
        />
    }
    return (
      <>
        <div className="channelDiv">
          <Button onClick={this.fetch.bind(this)}>
            Fetch Most Popular Channels
          </Button>
          {pagination}
        </div>
      </>
    );
  }

  item(data) {
    return (
      <>
        <img src={data.data.snippet.thumbnails.default.url}/>
        <p>{data.data.snippet.title}</p>
      </>
    );
  }

  fetch() {
    var context = this;

    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAX_SfM7Axbeei4wfGUkFxP5TIrABhKnko&type=channel&order=viewCount&maxResults=20";

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          context.setState({
            items: result.items
          });
        })
  }
}