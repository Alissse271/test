import { StyledSubtitle } from "./styles";

interface SubTitleProps {
	text: string;
	maxChars: number;
}

export const SubTitle = ({ text, maxChars }: SubTitleProps) => {
	const truncatedText = text.length > maxChars ? `${text.slice(0, maxChars)}...` : text;
	return <StyledSubtitle>{truncatedText}</StyledSubtitle>;
};
