import './Workers.scss';
import React from 'react'
import TableRow from '../Parts/TableRow'
import {useDispatch} from 'react-redux'
import Button from '../Parts/Button/Button'

function Workers(props) {

	let {workers} = props

	const dispatch = useDispatch()

	const addWorker = () =>{
		let name = prompt()
		const worker = {
			name,
			id:workers.length+1
		}
		dispatch({type: 'ADD_WORKER',payload:worker})
	}

	const delWorker = (worker_id) =>{
		console.log('worker_id',worker_id)
		dispatch({type: 'REMOVE_WORKER',payload:worker_id})
	}

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
							key={'contact' + item.id}
							name={item.name}
							delItem={delWorker}
							param={item.id}
						/>
					})}
				</div>
				<div>
					<Button
						className={'add_btn'}
						clickFunc={addWorker}
						name={'+ Добавить сотрудника'}
					/>
				</div>
			</div>

		</div>
	);
}

export default Workers;
