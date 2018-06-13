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

	state = {
		rows: this.props.rows,
		columns: this.props.columns,
		
		row1: this.props.row1,
		row2: this.props.row2,
		row3: this.props.row3
	};

	render() {
		return (
			<React.Fragment>
				<Row>
				{this.state.row1.map( (row, index) => (
					<Column key={'1-{index}'}>
						<Clicky source={this.state.row1[index]}/>
					</Column>
				))};
				</Row>

			<Row>
				{this.state.row1.map( (row, index) => (
					<Column key={'2-{index}'}>
						<Clicky source={this.state.row2[index]}/>
					</Column>
				))};
			</Row>

			<Row>
				{this.state.row1.map( (row, index) => (
					<Column key={'3-{index}'}>
						<Clicky source={this.state.row3[index]}/>
					</Column>
				))};
			</Row>
				</React.Fragment>
		)
	};


}



export default MainBody;