import React from 'react';
import CardInfo from '../Components/CardInfo';

function Card (props) {
	return(
		<div className="d-inline-block a-card" onClick={(e)=>props.click(props.item)}>
			<img className="a-card-image" src={props.item.imgsrc} alt={props.item.imgsrc} />
			{ props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} description={props.item.description}/>}
		</div>
	);
}

export default Card;