import { dropdown, user } from "assets";
import styled from "styled-components";
import { Color } from "ui";
import { FormControlLabel, Radio } from "@mui/material";

const FormContainer = styled.div`
	display: grid;
	grid-template-rows: min-content min-content 1fr;

	max-width: 528px;
	width: 100%;

	padding: 39px 22px 33px 21px;

	background: right bottom no-repeat url(${user}), ${Color.WHITE};
`;
const Title = styled.h1`
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;

	color: ${Color.DARK};
`;
const Subtitle = styled.h2`
	padding-bottom: 20px;

	font-size: 14px;
	line-height: 16px;

	color: ${Color.GRAY};
`;
const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const FieldsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 14px;
	grid-row-gap: 16px;

	@media (max-width: 678px) {
		grid-template-columns: 1fr;
	}
`;
const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;

	width: 100%;

	font-size: 12px;
	line-height: 14px;
	color: ${Color.GRAY};
`;
const StyledFormControlLabel = styled(FormControlLabel)`
	&.MuiFormControlLabel-root {
		margin-right: 19px;
	}
	&.MuiRadio-root {
		padding: 0;
	}
`;
const StyledRadio = styled(Radio)`
	&.MuiRadio-root {
		padding: 0 6px 0 9px;
	}
`;
const StyledInput = styled.input`
	width: 100%;

	padding: 5px 0 6px 0;

	font-size: 14px;
	line-height: 16px;
	color: ${Color.DARK};

	background-color: transparent;
	border-bottom: 0.7px solid ${Color.LIGHT};

	&:focus-visible {
		outline: none;
	}
`;
const StyledSelect = styled.select`
	width: 100%;

	padding: 5px 0 6px 0;

	font-size: 14px;
	line-height: 16px;

	background: right center no-repeat url(${dropdown}), transparent;
	border-bottom: 0.7px solid ${Color.LIGHT};

	appearance: none;
	cursor: pointer;

	&:focus-visible {
		outline: none;
	}
`;
const StyledOption = styled.option``;
const SelectContainer = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 3fr 2fr;
	column-gap: 9.8px;
`;
const SignBlock = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 678px) {
		margin-top: 20px;
	}
	@media (max-width: 475px) {
		flex-direction: column;
		row-gap: 16px;
	}
`;
const LoginText = styled.p`
	font-size: 13px;
	line-height: 15px;

	color: ${Color.BLACK};
`;
const LoginLink = styled.a`
	text-decoration: underline;

	color: ${Color.SECONDARY};
`;
const StyledButton = styled.button`
	width: max-content;

	padding: 7px 25px;

	font-family: "PT Sans", sans-serif;
	font-size: 14px;
	line-height: 18px;

	color: ${Color.WHITE};

	background-color: ${Color.SECONDARY};
	border: 0.5px solid ${Color.WHITE};
`;
const ErrorMessage = styled.p`
	font-size: 12px;
	line-height: 14px;
	color: ${Color.ERROR};
`;
export {
	FormContainer,
	FieldsContainer,
	Title,
	Subtitle,
	StyledForm,
	StyledSelect,
	StyledLabel,
	StyledInput,
	StyledOption,
	StyledFormControlLabel,
	StyledRadio,
	ErrorMessage,
	StyledButton,
	LoginText,
	LoginLink,
	SelectContainer,
	SignBlock,
};
