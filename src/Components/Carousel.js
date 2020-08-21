import React from 'react';
import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import bucketshaper from '../assets/images/bucketshaper.png';
import halmagame from '../assets/images/halmagame.jpg';
import searchagent from '../assets/images/searchagent.jpg';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'Token Bucket Filter',
					subtitle: 'Packet transmission',
					imgsrc: bucketshaper,
					link: 'https://github.com/Akxy-01/TokenBucketFilter',
					selected: false,
					description: 'This is my project!!'
				},
				{
					id: 1,
					title: 'Halma Agent',
					subtitle: 'Artificial Intelligence',
					imgsrc: halmagame,
					link: 'https://github.com/Akxy-01/Halma',
					selected: false,
					description: 'This is my project!!'
				},
				{
					id: 2,
					title: 'Search Agent',
					subtitle: 'Robotics',
					imgsrc: searchagent,
					link: 'https://github.com/Akxy-01/PathFinder',
					selected: false,
					description: 'This is my project!!'
				},
				{
					id: 3,
					title: 'Logical Analyzer',
					subtitle: 'Data Analytics',
					imgsrc: searchagent,
					link: 'https://github.com/Akxy-01/LogicalAnalyzer',
					selected: false,
					description: 'This is my project!!'
				},
				{
					id: 4,
					title: 'Sorter',
					subtitle: 'Logistics',
					imgsrc: searchagent,
					link: 'https://github.com/Akxy-01/Sort',
					selected: false,
					description: 'This is my project!!'
				}
			]
		}	
	}

	handleCardClick = (id, card) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach(item => {
			if(item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	} 

	makeitems = (items) => {
		return items.map(item => {
			return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
		})
	}

	render () {
		return(
			<Container fluid={true}>
				<Row className="justify-content-around">
					{this.makeitems(this.state.items)}
				</Row>
			</Container>
		);
	}

}

export default Carousel;