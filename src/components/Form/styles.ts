import { dropdown, user } from "assets";
import styled from "styled-components";
import { Color } from "ui";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

const FormContainer = styled.div`
	width: 100%;

	padding: 39px 22px 33px 21px;

	background: right bottom no-repeat url(${user}), ${Color.WHITE};
`;
const Title = styled.h1`
	font-size: 22px;
	line-height: 26px;
	letter-spacing: -0.46px;

	color: ${Color.BLACK};
`;
const Subtitle = styled.h2`
	padding-bottom: 20px;

	font-size: 14px;
	line-height: 16px;

	color: ${Color.GRAY};
`;
const StyledForm = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 14px;
	grid-row-gap: 16px;

	max-width: 528px;
	width: 100%;
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
	color: ${Color.BLACK};

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

	appearance: none;
	background: right 5px no-repeat url(${dropdown}), transparent;
	border-bottom: 0.7px solid ${Color.LIGHT};
	cursor: pointer;

	&:focus-visible {
		outline: none;
	}
`;
const StyledOption = styled.option``;
const ErrorMessage = styled.p`
	font-size: 12px;
	line-height: 14px;
	color: ${Color.ERROR};
`;
export {
	FormContainer,
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
};
