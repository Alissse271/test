import styled from "styled-components";
import { Color } from "ui";

const StyledSubtitle = styled.h2`
	padding-bottom: 20px;

	font-size: 14px;
	line-height: 16px;

	color: ${Color.GRAY};

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export { StyledSubtitle };
