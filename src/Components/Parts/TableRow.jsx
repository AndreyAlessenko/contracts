import './TableRow.scss';
import React from 'react'
import Button from './Button/Button'

function TableRow(props) {
	const {name, delItem, param} = props
	return (<div className={'table_row'}>
		<span>{name}</span>
		<Button
			clickFunc={delItem}
			name={'×'}
			className={'del_btn'}
			param={param}
		/>
		</div>);
}

export default TableRow;
