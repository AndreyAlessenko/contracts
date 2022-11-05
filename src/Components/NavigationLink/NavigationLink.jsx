import React from 'react'
import './NavigationLink.scss'
import { Link } from 'react-router-dom'

function NavigationLink(props) {
	const { title, link, active} = props
	let className = 'nav_link' + (active ? ' active': '')
	return (
		<Link className={className}
			 to={link}
		>{title}</Link>
	);
}

export default NavigationLink;
