import './Workers.scss';
import React from 'react'
import TableRow from '../Parts/TableRow'

function Workers() {

	const workers = [
		{id:1, name: 'Адльберт'},
		{id:2, name: 'Оббиратель бабушек'},
		{id:3, name: 'Начальникамана'},
		{id:4, name: 'Новый'},

	]

	return (
		<div className={'wrapper'}>
			<h1>Список сотрудников</h1>
			<div className={'worker_table'}>
				<div className={'table_header'}>
					ФИО сотрудника
				</div>
				<div>
					{workers.map(item =>{
						return <TableRow
							key={item.id}
							name={item.name}
						/>
					})}
				</div>
			</div>

		</div>
	);
}

export default Workers;
