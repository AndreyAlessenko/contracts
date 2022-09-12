import './TableRow.scss';
import React from 'react'

function TableRow(props) {
	const {name} = props
	return (<div className={'table_row'}>
		{name}
		</div>);
}

export default TableRow;
