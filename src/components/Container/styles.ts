import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
	display: grid;
	place-content: center;
	width: 100%;
	min-height: 100vh;

	background-color: ${Color.PRIMARY};
`;
const StyledContainer = styled.div`
	display: flex;

	width: 665px;
	/* width: 100%; */

	height: 481px;
`;
const AsideContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	max-width: 137px;
	width: 100%;

	background-color: ${Color.SECONDARY};
`;
const AsideTitle = styled.h1`
	padding: 22.5px 0 0 6.5px;

	font-family: "PT Sans", sans-serif;
	font-size: 49px;
	line-height: 63px;
	letter-spacing: 0.5px;
	writing-mode: vertical-lr;

	color: ${Color.WHITE};

	transform: rotate(180deg);
`;
export { Wrapper, StyledContainer, AsideContainer, AsideTitle };
