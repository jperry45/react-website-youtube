import React, { useState } from 'react';
import './SearchSubSection.css';
import { Button } from './Button';
import Pagination from './Pagination';

export default class SearchSubSection extends React.Component {

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
            <input className="searchBox" type="text" value={this.state.query} onChange={e => this.setState({query: e.target.value})} />
          </label>
          <input className="submitButton" type="submit" value="Search!" />
        </form>
        {pagination}
      </>
    );
  }

  item(data) {
    const url = "https://www.youtube.com/embed/" + data.data.id.videoId;
    return (
      <>
        <iframe className="embeddedVid" src={url} frameBorder='0' allow='autoplay; encrypted-media'
            allowFullScreen title='video' width='480' height='360'/>
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
          context.setState({
            items: result.items
          });
        })
  }
}