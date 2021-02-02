import React from 'react';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import mypic from '../assets/images/mypic.jpeg';

function LeftPane() {
    return(
        <Container> 
            <Row style={{margin: '10px'}}>
                <img className="mypic-st" src={mypic} alt="Img not found!" />
                <p>&#9993; aksh0103sudhir@gmail.com</p>
            </Row>
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
        </Container>
    );
}

export default LeftPane;


