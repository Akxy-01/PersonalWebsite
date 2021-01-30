import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture from '../Components/Picture';
import Content from '../Components/Content';
import { Container } from 'react-bootstrap';
import Carousel from '../Components/Carousel';

function ProjectsPage() {
	return(
		<Container fluid={true} style={{fontFamily:'Courier New'}}>
			<Row>
				<Col xs={4}>
					<Row>
						<Picture />
					</Row>
					<br />
					<hr />
					<br />
					<Row style={{margin: '10px'}}>
						<h5>ABOUT</h5>
						<br />
						<br />
						<p>
							Hi, I am Akshatha. I am currently a second year Graduate from University of Southern California. I am an enthusiastic full stack engineer who loves to code and be a part of competetive programming. 
						</p>
					</Row>
					<br />
					<hr />
					<br />
					<Row style={{margin: '10px'}}>
						<p>
							&copy;This site was made by AKSHATHA SUDHIR
						</p>
					</Row>
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