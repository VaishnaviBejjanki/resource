import React, { Component } from "react";
import TableEx1 from "./TableEx1";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Expansion extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}
  
	handleClick() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title} = this.state;
		const { opened } = this.state;

		if (opened){
			title = <ExpandMoreIcon/>;
		}else{
			title =<ChevronRightIcon/>;
		}

		return (
			<div>
				<div onClick={this.handleClick}>
					{title}
				</div>
				{opened && (					
					<div  style={{width:'3790%'}}>
						<TableEx1/>
					</div>
				)}
			</div>
		);
	}
}

export default Expansion;