import React, { useState } from 'react';
import $ from 'jquery';
import './APODSubSection.css';
import { Button } from './Button';

export default class APODSubSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
			explanation: "",
			title: ""
		}
	}

	render() {
		return (
			<>
			  <Button onClick={this.fetch.bind(this)}>
			  	Fetch Picture
			  </Button>
			  <p>
			    {this.state.title}
			  </p>
			  <img src={this.state.url} className="nasa"/>
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

		var url = "https://api.nasa.gov/planetary/apod?api_key=kaOBcWpith5vDxTLRNsiw6VWOXEt5nVmBcupwgov&date="
		+ year + "-" + month + "-" + day;

		fetch(url)
		  .then(res => res.json())
		  .then(
		    (result) => {
		      context.setState({
		      	url: result.url,
		      	explanation: result.explanation,
		      	title: result.title
		      });
		    })
	}
}