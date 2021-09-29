import React from 'react';
function Food({name,b}){
	console.log({name});
	return <div>
	<h2>I Like {name}</h2>
		<h2>you {b}</h2>
	</div>
}

const foodILike = [{a:"12",b:"abc"},{a:"23",b:"abcd"}]

function App(){
	
	return <div className="App">
		{foodILike.map(dish => <Food name={dish.a} b={dish.b}/>)}
	
	</div>; 
}

export default App;