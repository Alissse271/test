import { Button } from "components";
import { Wrapper, StyledPopup, Title } from "./styles";

interface PopupProps {
	isOpen: boolean;
	toggleModal: () => void;
}

export const Popup = ({ isOpen, toggleModal }: PopupProps) => {
	return (
		<>
			{isOpen && (
				<Wrapper>
					<StyledPopup>
						<Title>Registration completed successfully!</Title>
						<Button type="button" onClick={toggleModal} label="Close" />
					</StyledPopup>
				</Wrapper>
			)}
		</>
	);
};
