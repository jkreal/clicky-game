import React from "react";
import Clicky from "./components/Clicky";
import Navbar from "./components/Navbar";
import { Container, Row, Column } from "./components/Grid";
import MainBody from "./components/MainBody";
import Score from "./components/Score";

var rows = [1, 2, 3];
var columns = [1,2,3,4];

var images = ['http://via.placeholder.com/150x150', 'http://via.placeholder.com/151x151', 'http://via.placeholder.com/149x149', 'http://via.placeholder.com/149x151'];

var row1 = ['https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png', 'https://orig00.deviantart.net/1d75/f/2009/220/b/0/spongebob_4_150x150_png_by_somemilk.png', 'https://orig00.deviantart.net/5073/f/2009/220/c/e/spongebob_7_150x150_png_by_somemilk.png'];

var row2 = ['https://orig00.deviantart.net/cebb/f/2009/230/6/c/spongebob_14_150x150_png_by_somemilk.png', 'https://orig00.deviantart.net/7a0d/f/2009/220/0/f/spongebob_1_150x150_png_by_somemilk.png', 'https://orig00.deviantart.net/5073/f/2009/220/c/e/spongebob_7_150x150_png_by_somemilk.png'];

var row3 = ['https://orig00.deviantart.net/7f4c/f/2009/220/5/e/spongebob_2_150x150_png_by_somemilk.png', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UU5LAg3CEDS2cpkEw_4y21cT2InpLXXUzk6U_TQKVnN7uLGy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9cvzCEpINED1dDou0aKZd-7-tkjoQBF5ouBAQeNyZkWixH8rzg'];

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