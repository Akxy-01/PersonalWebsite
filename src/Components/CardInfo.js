import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

	const style = useSpring({opacity:1, from: {opacity:0 } });

	return(
		<animated.div className="a-card-info" style={style}>
			<p className="a-card-subtitle">Domain:  {props.subtitle}</p>
			<a href={props.link} target="_blank" rel="noopener noreferrer">Go to project</a>
		</animated.div>
	);
}

export default CardInfo;