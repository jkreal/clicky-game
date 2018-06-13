import React from "react";

class Clicky extends React.Component {

	state = {
		id: this.props.id || null,
		image: this.props.image,
		active: 'false',
		divStyle : {
			backgroundColor: this.props.color || 'red',
			width: '10em',
			height: '10em',
		}
	};


//handle click is working on div
	handleClick = () => {
		let bgstyle = {...this.state.divStyle};
		let active = {...this.state.active};
		if(bgstyle.backgroundColor === 'red') {
			bgstyle.backgroundColor = 'blue';
			active = 'false';
		} else {
			bgstyle.backgroundColor = 'red';
			active = 'true';
		}

		this.setState({
			divStyle: bgstyle,
			active: active
		});
	}

	randomize = () => {

	}

	render() {
		return (
			<div className="image-div"
				value={this.state.id}
				onClick={this.handleClick}
				style={this.state.divStyle}
				active={this.state.active}
				row={this.props.rows}
				column={this.props.columns}
				>
				<img src={this.props.source}/>
			</div>
		);
	}

}

export default Clicky;