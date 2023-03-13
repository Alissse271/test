import styled from "styled-components";
import { Color } from "ui";

const StyledTitle = styled.h1`
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;

	color: ${Color.DARK};

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export { StyledTitle };
