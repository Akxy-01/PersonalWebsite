import React from 'react';
import Content from '../Components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import LeftPane from '../Components/LeftPane';

function ResumePage() {
	return(
		<Container fluid={true} style={{fontFamily:'Courier New'}}>
			<Row>
				<Col xs={4}>
					<LeftPane />
				</Col>
				<Col xs={7}>
					<Content>
						<br />
						<h3 style={{fontWeight: 'bold'}}>RESUME</h3>
						<hr />
						<br />
						<h5 style={{fontWeight: 'bold'}}>EDUCATION</h5>
						<p>M.S. Computer Science, GPA: 3.5<br />University of Southern California, 2019</p>
                        <p>B.S. Computer Science, GPA: 9.2(Gold Medalist)<br />Visvesvaraya Technological University, 2013</p>
                        <br />
						<h5 style={{fontWeight: 'bold'}}>EXPERIENCE</h5>
						<p><b>STUDENT WORKER PROGRAMMER, USC</b><br />January 2021 - June 2021<br />Frontend Developer<br />Veritas Coffee Chat(https://www.veritas.com) (Flutter, Dart, MongoDB)</p>
                        <ul>
                            <li>Currently working on building a website and mobile application to provide a platform for anyone to connect with their peer having different worldview and have meaningful conversations over chat/meeting.</li>
                            <li>The project audience concentrates students from universities throughout the United States.</li>
                        </ul>
                        <p><b>AMAZON.COM INC., SEATTLE, WA</b><br />June 2020 - August 2020<br />Software Development Engineer Intern<br />Dynamic Configurations Dashboard (Java, HTML, Javascript, ReactJS, CSS, Dynamo DB) – Full stack dev</p>
                        <ul>
                            <li>Joined as part of Amazon Fulfillment Technologies Inbound Automation Team.</li>
                            <li>Developed a tool that provided user interface to the inbound SME’s to gain view/edit access to the current dynamic configurations associated with a fulfillment center that removed the dependency between SME’s and inbound automation team, eliminating time needed to co-ordinate.</li>
                            <li>As part of the project, I created a static serverless website and hosted it on API Gateway (LUMA framework). I wrote a native Lambda service to fetch configuration values from backend (QLDB) using an already existing Safe Dynamic Configuration API.</li>
                            <li>The user interface included features for searching a fulfillment to pull up a table of configuration values, applying filters to obtain a particular type of dynamic configurations, edit option to modify existing dynamic configuration values.</li>
                            <li>Created time modified fields to store modifications and store into Dynamo Database.</li>
                        </ul>
                        
                        <p><b>RIPPLING (PEOPLE CENTRE INC.), BANGALORE, INDIA</b><br />March 2018 - June 2019<br />Automation Engineer</p>
                        <ul>
                            <li>Wrote test scripts to perform unit, smoke and integration testing of the product.</li>
                            <li>Assisted in design review meetings.</li>
                            <li>Set up Continuous Integration and Deployment configurations on platforms CircleCi, Jenkins.</li>
                        </ul>
                        
                        <p><b>AURIGO SOFTWARE TECHNOLOGIES, BANGALORE, INDIA</b><br />June 2017 - March 2018<br />Software Developer in Test</p>
                        <ul>
                            <li>Wrote test scripts to perform unit, smoke and integration testing of the product.</li>
                            <li>Performed API Testing using Postman.</li>
                            <li>Tested mobile application.</li>
                        </ul>
                        
                        <p><b>AT&amp;T, BANGALORE, INDIA</b><br />January 2017 - June 2017<br />Associate Network Engineer</p>
                        <ul>
                            <li>Performed network troubleshooting on T1-T3 network lines.</li>
                            <li>Assisted with basic router configuration setup.</li>
                        </ul>
					</Content>
				</Col>
			</Row>
		</Container>
		
	);
}

export default ResumePage;