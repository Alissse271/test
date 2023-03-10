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
	ErrorMessage,
	StyledButton,
	LoginLink,
	LoginText,
	SelectContainer,
	FieldsContainer,
	SignBlock,
} from "./styles";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { RadioGroup } from "@mui/material";
import { Color } from "ui";
import { emailValidation, nameValidation, passwordValidation } from "utils";

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
	day: string;
	month: string;
	year: string;
	radioGroup: string;
	password: string;
	confirmPassword: string;
}

export const Form = () => {
	const {
		control,
		register,
		handleSubmit,
		watch,
		getValues,
		formState: { errors },
	} = useForm<FormProps>();

	const onSubmit: SubmitHandler<FormProps> = () => {
		console.log("yes");
	};

	return (
		<FormContainer>
			<Title>New user?</Title>
			<Subtitle>Use the form below to create your account.</Subtitle>
			<StyledForm onSubmit={handleSubmit(onSubmit)}>
				<FieldsContainer>
					<StyledLabel>
						First Name
						<StyledInput type="text" {...register("firstName", nameValidation())} />
						{errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
					</StyledLabel>
					<StyledLabel>
						Last Name
						<StyledInput type="text" {...register("lastName", nameValidation())} />
						{errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
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
						<StyledInput type="email" {...register("email", emailValidation())} />
						{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
					</StyledLabel>
					<StyledLabel>
						Date of Birth
						<SelectContainer>
							<StyledSelect {...register("day", { required: true })}>
								{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
									<StyledOption key={day} value={day}>
										{day}
									</StyledOption>
								))}
							</StyledSelect>
							{errors.day && <ErrorMessage>*day is required</ErrorMessage>}
							<StyledSelect {...register("month", { required: true })}>
								{[
									{ value: 1, label: "January" },
									{ value: 2, label: "February" },
									{ value: 3, label: "March" },
									{ value: 4, label: "April" },
									{ value: 5, label: "May" },
									{ value: 6, label: "June" },
									{ value: 7, label: "July" },
									{ value: 8, label: "August" },
									{ value: 9, label: "September" },
									{ value: 10, label: "October" },
									{ value: 11, label: "November" },
									{ value: 12, label: "December" },
								].map((month) => (
									<StyledOption key={month.value} value={month.value}>
										{month.label}
									</StyledOption>
								))}
							</StyledSelect>
							{errors.month && <ErrorMessage>*month is required</ErrorMessage>}
							<StyledSelect {...register("year", { required: true })}>
								{Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
									<StyledOption key={year} value={year}>
										{year}
									</StyledOption>
								))}
							</StyledSelect>
							{errors.year && <ErrorMessage>*year is required</ErrorMessage>}
						</SelectContainer>
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
							name="radioGroup"
							control={control}
						/>
					</StyledLabel>
					<StyledLabel>
						Password
						<StyledInput type="password" {...register("password", passwordValidation())} />
						{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
					</StyledLabel>
					<StyledLabel>
						Confirm Password
						<StyledInput type="password" {...register("confirmPassword", { required: true })} />
						{watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
							<ErrorMessage>*password not match</ErrorMessage>
						) : null}
					</StyledLabel>
				</FieldsContainer>
				<SignBlock>
					<LoginText>
						Have an account? <LoginLink href="#">Login</LoginLink>
					</LoginText>
					<StyledButton type="submit">Complete Signup</StyledButton>
				</SignBlock>
			</StyledForm>
		</FormContainer>
	);
};
