import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftPane from '../Components/LeftPane';
import Content from '../Components/Content';
import { Container } from 'react-bootstrap';

function ContactsPage() {
	return(
		<Container fluid={true} style={{fontFamily:'Courier New'}}>
			<Row>
				<Col xs={4}>
					<LeftPane />
				</Col>
				<Col xs={7}>
					<Content>
						<br />
						<h3><b>CONTACT</b></h3>
						<hr />
						<p>Feel free to get in touch. You can mail me at: <br />aksh0103sudhir@gmail.com</p>
					</Content>
				</Col>
			</Row>
		</Container>
	);
}

export default ContactsPage;