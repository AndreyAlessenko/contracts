import './Button.scss'

function Button(props) {

	let {className, clickFunc, name, onClickParam } = props

	return (
		<button
			onClick={() => clickFunc(onClickParam)}
			className={className}
		>
			{name}
		</button>
	)

}

export default Button;
