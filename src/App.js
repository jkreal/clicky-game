import React from "react";
import Clicky from "./components/Clicky";
import Navbar from "./components/Navbar";
import { Container, Row, Column } from "./components/Grid";
import MainBody from "./components/MainBody";
import Score from "./components/Score";

var rows = [1, 2, 3];
var columns = [1,2,3,4];

var images = ['http://via.placeholder.com/150x150', 'http://via.placeholder.com/151x151', 'http://via.placeholder.com/149x149', 'http://via.placeholder.com/149x151'];

var row1 = ['https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png', 'http://via.placeholder.com/151x151', 'http://via.placeholder.com/149x149', 'http://via.placeholder.com/149x151'];

var row2 = ['http://via.placeholder.com/150x150', 'http://via.placeholder.com/151x151', 'http://via.placeholder.com/149x149', 'http://via.placeholder.com/149x151'];

var row3 = ['http://via.placeholder.com/150x150', 'http://via.placeholder.com/151x151', 'http://via.placeholder.com/149x149', 'http://via.placeholder.com/149x151'];

const App = () => (

	<Container>
		
		<Row>
			<Navbar/>
		</Row>

		<Row>
			<Column>
			<Score/>
			</Column>

		</Row>

	<MainBody row1={row1} row2={row2} row3={row3}/>

</Container>
);

export default App;