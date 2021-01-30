import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {
	return(
		<Container className="block-example border" fluid={true} style={{marginTop: '50px',marginBottom:'50px', backgroundColor:'white', fontFamily: 'Courier New'}}>
			<Row className="justify-content-left">
				<Col>
					{props.children}
				</Col>
			</Row>
		</Container>
	);
}

export default Content;