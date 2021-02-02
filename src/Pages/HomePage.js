import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftPane from '../Components/LeftPane';
import Content from '../Components/Content';
import { Container } from 'react-bootstrap';

function HomePage() {
	return(
		<Container fluid={true} style={{fontFamily:'Courier New'}}>
			<Row>
				<Col xs={4}>
					<LeftPane />
				</Col>
				<Col xs={7}>
					<Content>
						<br />
						<h3 style={{fontWeight: 'bold'}}>ABOUT THIS SITE</h3>
						<p>A STATIC RESPONSIVE REACT APPLICATION INTEGRATED WITH NODEJS</p>
						<hr />
						<p>You can check out my projects, have a look at my resume and know more about me on this website.</p>
					</Content>
				</Col>
			</Row>
		</Container>
	);
}

export default HomePage;