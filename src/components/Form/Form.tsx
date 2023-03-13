import {
	FormContainer,
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
import {
	confirmPasswordValidation,
	emailValidation,
	nameValidation,
	passwordValidation,
} from "utils";
import { useToggle } from "hooks";
import { Popup, Title, SubTitle } from "components";
import { AnimatePresence, Variants } from "framer-motion";

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
	const [isOpen, toggleModal] = useToggle();
	const {
		control,
		register,
		handleSubmit,
		watch,
		getValues,
		setError,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<FormProps>();

	const buttonVariants: Variants = {
		shake: {
			x: [-10, 10, -10, 10, -5, 5, -2, 2, 0],
			transition: {
				duration: 0.5,
			},
		},
		rest: {
			x: 0,
		},
	};

	const onSubmit: SubmitHandler<FormProps> = () => {
		setError("firstName", { message: "Не удалось отправить форму" });

		// fetch("server-ok.json")
		// 	.then(() => {
		// 		reset();
		// 		toggleModal();
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 		fetch("server-error.json")
		// 			.then((errorData) => {
		// 				console.log(errorData);
		// 			})
		// 			.catch((error) => {
		// 				console.error(error);
		// 				console.error("Не удалось получить сообщение об ошибке");
		// 			});
		// 	});
	};

	return (
		<>
			<AnimatePresence>
				<FormContainer>
					<Title text="New user?" maxChars={70} />
					<SubTitle text="Use the form below to create your account." maxChars={70} />
					<StyledForm onSubmit={handleSubmit(onSubmit)}>
						<FieldsContainer>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5 }}
							>
								First Name
								<StyledInput
									type="text"
									{...register("firstName", nameValidation())}
									error={Boolean(errors.firstName)}
								/>
								{errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
							</StyledLabel>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Last Name
								<StyledInput
									type="text"
									{...register("lastName", nameValidation())}
									error={Boolean(errors.lastName)}
								/>
								{errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
							</StyledLabel>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
							>
								Nationality
								<StyledSelect {...register("nationality")}>
									<StyledOption value="american">American</StyledOption>
									<StyledOption value="polish">Polish</StyledOption>
									<StyledOption value="turkish">Turkish</StyledOption>
									<StyledOption value="spanish">Spanish</StyledOption>
								</StyledSelect>
							</StyledLabel>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								E-mail
								<StyledInput
									type="email"
									{...register("email", emailValidation())}
									error={Boolean(errors.email)}
								/>
								{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
							</StyledLabel>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.8 }}
							>
								Date of Birth
								<SelectContainer
									initial={{ y: 50, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.0 }}
								>
									<StyledSelect {...register("day", { required: true })}>
										{Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
											<StyledOption key={day} value={day}>
												{day}
											</StyledOption>
										))}
									</StyledSelect>
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
									<StyledSelect {...register("year", { required: true })}>
										{Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(
											(year) => (
												<StyledOption key={year} value={year}>
													{year}
												</StyledOption>
											),
										)}
									</StyledSelect>
								</SelectContainer>
							</StyledLabel>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.2 }}
							>
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
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.4 }}
							>
								Password
								<StyledInput
									type="password"
									{...register("password", passwordValidation())}
									error={Boolean(errors.password)}
								/>
								{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
							</StyledLabel>
							<StyledLabel
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 1.6 }}
							>
								Confirm Password
								<StyledInput
									type="password"
									{...register("confirmPassword", confirmPasswordValidation())}
									error={Boolean(errors.confirmPassword)}
								/>
								{watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
									<ErrorMessage>*password not match</ErrorMessage>
								) : null}
								{errors.confirmPassword && (
									<ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
								)}
							</StyledLabel>
						</FieldsContainer>
						<SignBlock
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 1.8 }}
						>
							<LoginText>
								Have an account? <LoginLink href="#">Login</LoginLink>
							</LoginText>
							<StyledButton
								// animate={isSubmitting && errors ? "shake" : "rest"}
								// variants={buttonVariants}
								animate={{ x: !isSubmitSuccessful ? [0, -10, 10, -10, 10, 0] : 0 }}
								transition={{ type: "spring", stiffness: 500, damping: 10 }}
								type="submit"
							>
								Complete Signup
							</StyledButton>
						</SignBlock>
					</StyledForm>
				</FormContainer>
			</AnimatePresence>
			{isOpen && <Popup isOpen={isOpen} toggleModal={toggleModal} />}
		</>
	);
};
