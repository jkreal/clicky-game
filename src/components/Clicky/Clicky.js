import React from "react";

class Clicky extends React.Component {

	state = {
		id: 0,
		active: 'false',
		divStyle : {
			backgroundColor: 'red',
			width: '10em',
			height: '10em',
		}
	};


//handle click is working on div
	handleClick = () => {
		let bgstyle = {...this.state.divStyle};
		if(bgstyle.backgroundColor === 'red') {
			bgstyle.backgroundColor = 'blue'
		} else {
			bgstyle.backgroundColor = 'red'
		}

		console.log(bgstyle.backgroundColor);
		this.setState({
			divStyle: bgstyle
		});
	}

	render() {
		return (
			<div className="image-div"
				value={this.state.id}
				onClick={this.handleClick}
				style={this.state.divStyle}
				active={this.state.active}>
			</div>
		);
	}

}

export default Clicky;