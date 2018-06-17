import React from "react";
import Clicky from "../Clicky";
import {
	Column,
	Container,
	Row
} from "../Grid";



class MainBody extends React.Component {

	componentDidMount() {

	}

	componentDidUpdate() {

	}

	state = {
		rows: this.props.rows,
		columns: this.props.columns,
		
		row1: this.props.row1,
		row2: this.props.row2,
		row3: this.props.row3
	};

	shuffle = ( array ) => {
		for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
		}
		return array;
	}

	randomize = () => {

		this.array1 = this.shuffle(this.state.row1);
		this.array2 = this.shuffle(this.state.row2);
		this.array3 = this.shuffle(this.state.row3);

		this.setState({
			row1: this.array1,
			row2: this.array2,
			row3: this.array3
		});

		console.log("click!");
	}

	render() {
		return (
			<React.Fragment>
				<Row>
				{this.state.row1.map( (row, index) => (
					<Column key={index + '1'}>
						<Clicky source={this.state.row1[index]}
							click={this.randomize}/>
					</Column>
				))};
				</Row>

			<Row>
				{this.state.row2.map( (row, index) => (
					<Column key={index + '2'}>
						<Clicky source={this.state.row2[index]}
							click={this.randomize}/>
					</Column>
				))};
			</Row>

			<Row>
				{this.state.row3.map( (row, index) => (
					<Column key={index + '3'}>
						<Clicky source={this.state.row3[index]}
							click={this.randomize}/>
					</Column>
				))};
			</Row>
				</React.Fragment>
		)
	};


}



export default MainBody;