import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.button`
	padding: 7px 25px;

	font-family: "PT Sans", sans-serif;
	font-size: 14px;
	line-height: 18px;

	color: ${Color.WHITE};

	background-color: ${Color.SECONDARY};
	border: 0.5px solid ${Color.WHITE};

	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
	&:disabled {
		color: ${Color.BLACK};
		background: ${Color.GRAY};
	}
`;

export { StyledButton };
