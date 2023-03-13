import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background: rgba(22, 44, 78, 0.6);

	z-index: 3;
`;
const StyledPopup = styled.div`
	display: grid;
	grid-template-rows: repeat(2, auto);
	grid-row-gap: 30px;

	width: 320px;

	padding: 20px;

	background: ${Color.WHITE};

	border: 1px solid rgba(19, 89, 120, 0.07);
	border-radius: 2px;

	z-index: 4;

	@media (max-width: 425px) {
		width: 300px;
	}
`;
const Title = styled.h2`
	font-family: "PT Sans", sans-serif;
	font-size: 49px;
	line-height: 63px;
	letter-spacing: 0.5px;
	text-align: center;

	color: ${Color.BLACK};
`;

export { Wrapper, StyledPopup, Title };
