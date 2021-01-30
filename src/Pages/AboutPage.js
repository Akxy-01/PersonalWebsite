import React from 'react';
import Content from '../Components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Picture from '../Components/Picture';

function AboutPage() {
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
						<h3 style={{fontWeight: 'bold'}}>ABOUT ME</h3>
						<hr />
						<br />
						<h5 style={{fontWeight: 'bold'}}>INTRO</h5>
						<p>I am a budding software engineer with a curious technical acumen. My primary job function is a full stack engineer.<br />I am seeking full-time opportunities and will be willing to take on interesting projects. I am currently based in Los Angeles and up for relocation.</p>
						<br />
						<h5 style={{fontWeight: 'bold'}}>CURRENTLY</h5>
						<p>At University of Southern California I have enjoyed courses on Web Technologies, Foundations in Data Mining, Operating Systems. Apart from these, currently I'm learning technologies used for Distributed Programming like Kafka, Apache zookeeper.</p>
						<br />
						<h5 style={{fontWeight: 'bold'}}>I LIKE</h5>
						<ul>
							<li>Traveling</li>
							<li>Playing badminton</li>
							<li>Sprinting-Athletics</li>
							<li>Drawing/sketching</li>
							<li>Trying out adventurous hikes</li>
						</ul>
					</Content>
				</Col>
			</Row>
		</Container>
		
	);
}

export default AboutPage;