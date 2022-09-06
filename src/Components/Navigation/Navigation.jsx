import './Navigation.scss';
import NavigationLink from '../NavigationLink/NavigationLink'
import React from 'react'

function Navigation() {
	return (
			<nav className={'nav'}>
				<NavigationLink
					title={'Сотрудники'}
					link={'https://www.google.com/'}
				/>
				<NavigationLink
					title={'Договоры'}
					link={'https://www.google.com/'}
					active={true}
				/>
			</nav>
	);
}

export default Navigation;
