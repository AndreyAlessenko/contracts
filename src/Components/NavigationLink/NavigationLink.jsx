import React from 'react'
import './NavigationLink.scss'

function NavigationLink(props) {
	const { title, link, active} = props
	let className = 'nav_link' + (active ? ' active': '')
	return (
		<a className={className}
			 href={link}
		>{title}</a>
	);
}

export default NavigationLink;
