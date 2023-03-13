import { StyledTitle } from "./styles";

interface TitleProps {
	text: string;
	maxChars: number;
}

export const Title = ({ text, maxChars }: TitleProps) => {
	const truncatedText = text.length > maxChars ? `${text.slice(0, maxChars)}...` : text;
	return <StyledTitle>{truncatedText}</StyledTitle>;
};
