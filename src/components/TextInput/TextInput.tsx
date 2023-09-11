import {
	ChangeEventHandler,
	DetailedHTMLProps,
	InputHTMLAttributes,
} from "react";
import "./TextInput.css";

type Props = Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	"onChange"
> & {
	onChange: (value: string) => void;
};

const TextInput = (props: Props) => {
	const { onChange, ...p } = props;
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
		onChange(e.target.value);
	return (
		<input className="search-bar" type="text" onChange={handleChange} {...p} />
	);
};

export default TextInput;
