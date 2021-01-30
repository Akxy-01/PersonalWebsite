import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
	return (
		<footer style={{backgroundColor: '#45A293', position:'absolute', bottom: '0', width: '100vw'}}>
			<Container className="mb-0" fluid={true}>
				<Row className="border-top justify-content-between p-3">
					<Col className="p-0" md={3} sm={12}>
						&#9993;  Email: asudhir@usc.edu
					</Col>
					<Col className="p-0 d-flex justify-content-end" md={3}>
						&copy;This site was made by Akshatha Sudhir.
					</Col>

				</Row>
			</Container>
		</footer>
	)
}

export default Footer;
