import React from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../Components/Hero';
import Content from '../Components/Content';
import mypic from '../assets/images/mypic.jpeg';

function AboutPage(props) {
	return(
		<div>
			<Hero title={props.title} />
			<Content>
			<img className="mypic-st" src={mypic} alt={mypic} />
				<p>Hello, my name is Akshatha. I am an inquisite and enthusiastic graduate student at University of Southern California.</p>
				<p>I always enjoy working on challenging projects and my dream is to start my own company one day and become a successful entrepreneur.</p>
				<p>I have strong foundation on Data structures, Operating System core concepts, Programming, Logical and Analytical reasoning and Problem solving techniques. I am interested in full stack development with experience in Node JS, React, MySQL, Oracle SQL, Mongo DB, Dynamo DB.</p>
				<p>I am constantly learning new things, currently gaining knowledge on developing large scale distributed systems using Kafka, Apache zookeeper.</p>
				<p>In my free time, I would love to spend time on traveling or learning a new sport.</p>
			</Content>
		</div>
	);
}

export default AboutPage;