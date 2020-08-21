import React from 'react';
import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import bucketshaper from '../assets/images/bucketshaper.png';
import halmagame from '../assets/images/halmagame.jpg';
import searchagent from '../assets/images/searchagent.jpg';
import sorter from '../assets/images/sorter.png';
import logicalanalyzer from '../assets/images/logicalanalyzer.png';

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
					description: 'In this project, packet transmission rate is controlled by controlling bucket size and token arrival rate. I have used multi-threading model to simulate generation of packets and tokens. For synchronization, the threads use mutex and conditional variables.'
				},
				{
					id: 1,
					title: 'Halma Agent',
					subtitle: 'Artificial Intelligence',
					imgsrc: halmagame,
					link: 'https://github.com/Akxy-01/Halma',
					selected: false,
					description: "Halma game is a variant of Chinese Checkers game. In this project, I have built an artificial intelligent agent that will find best moves to reach the opponent's position by making use of minimax logic."
				},
				{
					id: 2,
					title: 'Search Agent',
					subtitle: 'Robotics',
					imgsrc: searchagent,
					link: 'https://github.com/Akxy-01/PathFinder',
					selected: false,
					description: "In this project, I have developed a path finder that employs three different algorithms to find shortest path - BFS(Breadth First Search), UCS(Uniform Cost Search and A*(heuristic). The agent will find the route from source to destination, overcoming the given constraints(avoiding obstacles)"
				},
				{
					id: 3,
					title: 'Logical Analyzer',
					subtitle: 'Data Analytics',
					imgsrc: logicalanalyzer,
					link: 'https://github.com/Akxy-01/LogicalAnalyzer',
					selected: false,
					description: "Logical analyzer is a service that will take in predicates as input and will provide a binary valued logical decision either True or False based on whether a certain conclusion can be arrived from the given statements."
				},
				{
					id: 4,
					title: 'Sorter',
					subtitle: 'Logistics',
					imgsrc: sorter,
					link: 'https://github.com/Akxy-01/Sort',
					selected: false,
					description: "Sorter will arrange different transactions according to their creation time. This will consider a large amount of input in the form of external files and will provide an ordered list."
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