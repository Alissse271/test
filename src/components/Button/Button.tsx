import { ButtonHTMLAttributes, memo } from "react";
import { StyledButton } from "./styles";

interface IButton {
	type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	label: string;
	onClick: () => void;
}

export const Button = memo(({ type, label, onClick }: IButton) => {
	return (
		<StyledButton type={type} onClick={onClick}>
			{label}
		</StyledButton>
	);
});
