import './Navigation.scss';
import NavigationLink from '../NavigationLink/NavigationLink'
import React from 'react'

function Navigation() {
	return (
			<nav className={'nav'}>
				<NavigationLink
					title={'Сотрудники'}
					link={'https://www.google.com/'}
					active={true}
				/>
				<NavigationLink
					title={'Договоры'}
					link={'https://www.google.com/'}
				/>
			</nav>
	);
}

export default Navigation;
