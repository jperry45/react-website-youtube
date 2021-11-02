import React, { useState } from 'react';
import './NEASubSection.css';
import { Button } from './Button';
import Pagination from './Pagination';

export default class APODSubSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      query: this.props.defaultInputValue || ''
    }
    this.fetch = this.fetch.bind(this);
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
        <form onSubmit={this.fetch}>
          <label>
            <input type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
          </label>
          <input type="submit" value="Search" />
        </form>
        {pagination}
      </>
    );
  }

  item(data) {
    const url = "https://www.youtube.com/channel/" + data.data.snippet.channelId;
    return (
      <>
        <img src={data.data.snippet.thumbnails.default.url}/>
        <a className="options" href={url}>
        {data.data.snippet.title}
        </a>
      </>
    );
  }

  fetch(event) {
    event.preventDefault();
    var context = this;

    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAX_SfM7Axbeei4wfGUkFxP5TIrABhKnko&type=video&q=" + this.state.query + "&maxResults=50";

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          context.setState({
            items: result.items
          });
        })
  }
}