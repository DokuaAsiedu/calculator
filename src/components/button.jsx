import PropTypes from "prop-types";

export function Button({ text, addClass, handleClick }) {
	return (
		<button
			className={`flex flex-col items-center justify-center text-white hover:text-black hover:border-[1px] hover:border-granite ${addClass}`}
			onClick={handleClick}
		>
			<span className="">{text}</span>
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string,
	addClass: PropTypes.string,
	handleClick: PropTypes.func,
};
