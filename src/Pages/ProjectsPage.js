import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftPane from '../Components/LeftPane';
import Content from '../Components/Content';
import { Container } from 'react-bootstrap';
import Carousel from '../Components/Carousel';

function ProjectsPage() {
	return(
		<Container fluid={true} style={{fontFamily:'Courier New'}}>
			<Row>
				<Col xs={4}>
					<LeftPane />
				</Col>
				<Col xs={7}>
					<Content>
						<br />
						<h3 style={{fontWeight: 'bold'}}>PROJECTS</h3>
						<hr />
						<Carousel />
					</Content>
				</Col>
			</Row>
		</Container>
	);
}

export default ProjectsPage;