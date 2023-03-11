import styled from "styled-components";
import { Color } from "ui";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	min-height: 100vh;

	padding: 0 10px;

	background-color: ${Color.PRIMARY};

	@media (max-width: 425px) {
		padding: 0;
	}
`;
const StyledContainer = styled.div`
	display: flex;
	flex: 1;

	max-width: 665px;
	width: 100%;
	height: 481px;

	@media (max-width: 678px) {
		height: auto;
	}
	@media (max-width: 425px) {
		flex-direction: column;
	}
`;
const AsideContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	max-width: 137px;
	width: 100%;

	background-color: ${Color.SECONDARY};

	@media (max-width: 568px) {
		max-width: 100px;
	}
	@media (max-width: 425px) {
		max-width: 100%;
	}
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

	@media (max-width: 425px) {
		padding: 0 0 4.5px 21px;

		writing-mode: unset;

		transform: rotate(0);
	}
`;
export { Wrapper, StyledContainer, AsideContainer, AsideTitle };
