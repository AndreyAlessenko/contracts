import './Button.scss'

function Button(props) {

	let {className, clickFunc, name, param={}} = props
	return (
		<button
			onClick={() => clickFunc(param)}
			className={className}
		>
			{name}
		</button>
	)

}

export default Button;
