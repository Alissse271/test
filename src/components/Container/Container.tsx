import { Form } from "components";
import { Wrapper, AsideContainer, AsideTitle, StyledContainer } from "./styles";

export const Container = () => {
	return (
		<Wrapper>
			<StyledContainer>
				<AsideContainer>
					<AsideTitle>Sign up</AsideTitle>
				</AsideContainer>
				<Form />
			</StyledContainer>
		</Wrapper>
	);
};
