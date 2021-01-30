import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture from '../Components/Picture';
import Content from '../Components/Content';
import { Container } from 'react-bootstrap';

function HomePage() {
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