const nameValidation = () => {
	return {
		required: "*name is required",
		pattern: { value: /^[a-zA-ZА-ЯЁа-яё\s]*$/, message: "Enter a valid name" },
		maxLength: {
			value: 15,
			message: "*max 15 characters",
		},
	};
};
const emailValidation = () => {
	return {
		required: "*email is required",
		pattern: {
			value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
			message: "Enter a valid email",
		},
		maxLength: {
			value: 30,
			message: "*max 30 characters",
		},
	};
};
const passwordValidation = () => {
	return {
		required: "*password is required",
		pattern: {
			value: /(?=.*\d)(?=.*[a-z]).{8,}/,
			message: `${"*password must contain at least one number and one uppercase"} 
		${"and lowercase letter, and at least 8 or more characters"}`,
		},
	};
};
const confirmPasswordValidation = () => {
	return {
		required: "*please, confirm your password",
	};
};

export { nameValidation, emailValidation, passwordValidation, confirmPasswordValidation };
