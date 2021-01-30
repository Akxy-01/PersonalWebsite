import React from 'react';
import Container from 'react-bootstrap/Container';
import mypic from '../assets/images/mypic.jpeg';

function Picture() {
	return(
		<Container style={{margin:'10px'}}>
			<img className="mypic-st" src={mypic} alt="Img not found"/>
            <p>&#9993; aksh0103sudhir@gmail.com</p>
		</Container>
	);
}

export default Picture;