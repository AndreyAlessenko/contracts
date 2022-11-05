import './Navigation.scss';
import NavigationLink from '../NavigationLink/NavigationLink'
import React from 'react'

function Navigation() {
	return (
			<nav className={'nav'}>
				<NavigationLink
					title={'Сотрудники'}
					link={'/workers'}
					active={true}
				/>
				<NavigationLink
					title={'Договоры'}
					link={'/contracts'}
				/>
			</nav>
	);
}

export default Navigation;
