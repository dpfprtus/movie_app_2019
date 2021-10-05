import React from "react";
import {HashRouter,Route} from "react-router-dom";
// eslint-disable-next-line
import About from "./routes/about";
// eslint-disable-next-line
import Home from "./routes/home";

function App(){
	return (
		<HashRouter>
		<Route path="/" exact={true} component={Home} />
		
		<Route path="/about" component={About}/>
		
	</HashRouter>
		);
}

export default App;