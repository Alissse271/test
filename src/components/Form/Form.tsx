import {
	FormContainer,
	Title,
	Subtitle,
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledSelect,
	StyledOption,
	StyledFormControlLabel,
	StyledRadio,
} from "./styles";
import { useForm, Controller } from "react-hook-form";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Color } from "ui";

enum NationalityEnum {
	american = "american",
	polish = "polish",
	turkish = "turkish",
	spanish = "spanish",
}

interface FormProps {
	firstName: string;
	lastName: string;
	nationality: NationalityEnum;
	email: string;
	birthDay: { label: string; value: string };
	birthMounth: { label: string; value: string };
	birthYear: { label: string; value: string };
	radioGroup: string;
	password: string;
	confirmPassword: string;
}

export const Form = () => {
	const {
		control,
		register,
		formState: { errors },
	} = useForm();

	return (
		<FormContainer>
			<Title>New user?</Title>
			<Subtitle>Use the form below to create your account.</Subtitle>
			<StyledForm>
				<StyledLabel>
					First Name
					<StyledInput type="text" />
				</StyledLabel>
				<StyledLabel>
					Last Name
					<StyledInput type="text" />
				</StyledLabel>
				<StyledLabel>
					Nationality
					<StyledSelect {...register("nationality")}>
						<StyledOption value="american">American</StyledOption>
						<StyledOption value="polish">Polish</StyledOption>
						<StyledOption value="turkish">Turkish</StyledOption>
						<StyledOption value="spanish">Spanish</StyledOption>
					</StyledSelect>
				</StyledLabel>
				<StyledLabel>
					E-mail
					<StyledInput type="email" defaultValue="alice.miller@yahoo.com" />
				</StyledLabel>
				<StyledLabel>
					Gender
					<Controller
						defaultValue="male"
						render={({ field }) => (
							<RadioGroup row={true} aria-label="gender" {...field} name="gender">
								<StyledFormControlLabel
									value="male"
									control={
										<StyledRadio
											sx={{
												color: `${Color.SECONDARY}`,
												"&.Mui-checked": {
													color: `${Color.SECONDARY}`,
												},
												"& .MuiSvgIcon-root": {
													fontSize: 18,
												},
											}}
										/>
									}
									label="Male"
								/>
								<StyledFormControlLabel
									value="female"
									control={
										<StyledRadio
											sx={{
												color: `${Color.SECONDARY}`,
												"&.Mui-checked": {
													color: `${Color.SECONDARY}`,
												},
												"& .MuiSvgIcon-root": {
													fontSize: 18,
												},
											}}
										/>
									}
									label="Female"
								/>
							</RadioGroup>
						)}
						rules={{ required: true }}
						name="RadioGroup"
						control={control}
					/>
				</StyledLabel>
				<StyledLabel>
					Password
					<StyledInput type="password" />
				</StyledLabel>
				<StyledLabel>
					Confirm Password
					<StyledInput type="password" />
				</StyledLabel>
			</StyledForm>
		</FormContainer>
	);
};
