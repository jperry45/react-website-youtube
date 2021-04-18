import React, { useState } from 'react';
import $ from 'jquery';
import './NEASubSection.css';
import Button from 'react-bootstrap/Button';

export default class NEASubSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			asteroids: []
		}
	}


	render() {
		const listItems = this.state.asteroids.slice(0,5).map((d) => <a className="options" href={d.nasa_jpl_url}>{d.name}</a>);
		return (
			<>
			  <Button onClick={this.fetch.bind(this)}>
			  	Find Asteroids
			  </Button>
			  {listItems}
			</>
		);
	}

	fetch() {
		var context = this;

		var month = this.props.date.substring(0, this.props.date.indexOf('/'));
		if (month.length < 2) {
			month = "0" + month;
		}

		var day = this.props.date.substring(this.props.date.indexOf('/') + 1, this.props.date.indexOf('/', 2))
		if (day.length < 2) {
			day = "0" + day;
		}

		var year = this.props.date.substring(this.props.date.indexOf('/', 2) + 1);

		var formattedDate = year + "-" + month + "-" + day;

		var url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + formattedDate + 
		"&end_date=" + formattedDate + "&api_key=kaOBcWpith5vDxTLRNsiw6VWOXEt5nVmBcupwgov"

		fetch(url)
		  .then(res => res.json())
		  .then(
		    (result) => {
		      context.setState({
		      	asteroids: result.near_earth_objects[formattedDate]
		      });
		    })
	}
}