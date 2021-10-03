import React from 'react';
import axios from 'axios';
//import PropTypes from "prop-types";

class App extends React.Component{
	state = {
		isLoading: true
	};
	
	getMovies = async()=> {
		// eslint-disable-next-line
		const movies = await  axios.get("https://yts.mx/api/v2/list_movies.json");
	}
	async componentDidMount(){
  
    	this.getMovies();
	};
	
	render(){
		const { isLoading} = this.state;
		return <div>{isLoading ? "isLoading" : "We r ready."}</div>;
	}
		}
export default App;