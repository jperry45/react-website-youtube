import React, { useState } from 'react';
import $ from 'jquery';
import './NEASubSection.css';
import { Button } from './Button';
import Pagination from './Pagination';

export default class NEASubSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			asteroids: []
		}
	}

	asteroid(data) {
		return (
		  <a className="options" href={data.data.nasa_jpl_url}>
		  Name: {data.data.name}
		  <br />Distance: {data.data.close_approach_data[0].miss_distance.astronomical}AU from Earth</a>
		);
	}


	render() {
		let pagination;
		if (this.state.asteroids !== undefined && this.state.asteroids.length != 0) {
			pagination = <Pagination
			    data={this.state.asteroids}
			    RenderComponent={this.asteroid}
			    title="Posts"
			    pageLimit={5}
			    dataLimit={4}
			  />
		}
		return (
			<>
			  <Button onClick={this.fetch.bind(this)}>
			  	Find Asteroids
			  </Button>
			  {pagination}
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