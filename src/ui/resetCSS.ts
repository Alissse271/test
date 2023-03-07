import { css } from "styled-components";

export const resetCSS = css`
	* {
		font-family: "Work Sans", sans-serif;
		padding: 0;
		margin: 0;
		border: 0;
		box-sizing: border-box;
	}
	a {
		text-decoration: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
		margin: 0;
		padding: 0;
	}
`;
