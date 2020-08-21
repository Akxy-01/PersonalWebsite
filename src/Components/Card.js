import React from 'react';
import CardInfo from '../Components/CardInfo';

function Card (props) {
	return(
		<div className="d-inline-block a-card" onClick={(e)=>props.click(props.item)}>
			<img className="a-card-image" src={props.item.imgsrc} alt={props.item.imgsrc} style={{ cursor: "pointer" }}/>
			<p style={{ fontWeight: 'bold' }}>{props.item.title}</p>
			{ props.item.selected && <CardInfo className="d-inline-block" title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} description={props.item.description}/>}
		</div>
	);
}

export default Card;