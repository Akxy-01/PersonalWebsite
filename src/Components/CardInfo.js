import React from 'react';
import { useSpring, animated } from 'react-spring';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardInfo(props) {

	const style = useSpring({opacity:1, from: {opacity:0 } });

	return(
		<animated.div className="a-card-info" style={style}>
			<Container>
				<Row>
					<Col>
						<p className="a-card-subtitle"><b>Domain:</b>  {props.subtitle}</p>
						<a href={props.link} target="_blank" rel="noopener noreferrer"><b>Go to project</b></a>
					</Col>
					<Col>
						<p><b>Description:</b> {props.description}</p>
					</Col>
				</Row>
			</Container>
			
		</animated.div>
	);
}

export default CardInfo;