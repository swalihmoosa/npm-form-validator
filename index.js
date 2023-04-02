function formValidator(validationRules) {
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const hasUppercase = /[A-Z]/;
    const hasDigit = /\d/;
    const isDigit = /^\d+$/;

    const validateStates = () => {
        const errors = [];

        if (validationRules) {
            Object.keys(validationRules).map((key) => {
                // condition for checking required or not
                if (
                    validationRules[key]?.required === true &&
                    validationRules[key]?.value === ""
                ) {
                    errors.push(`${key} is required`);
                }
                // condition for checking minimum length
                else if (
                    validationRules[key]?.required === true &&
                    validationRules[key]?.value?.toString()?.length <
                        validationRules[key]?.minLength
                ) {
                    errors.push(
                        `minimum ${validationRules[key]?.minLength} character is required for ${key}`
                    );
                }
                // condition for checking maximum length
                else if (
                    validationRules[key]?.value?.toString()?.length >
                    validationRules[key]?.maxLength
                ) {
                    errors.push(
                        `maximum length is ${validationRules[key]?.maxLength} for ${key}`
                    );
                }
                // condition for checking type = text
                else if (
                    validationRules[key]?.type === "text" &&
                    hasSpecialChars.test(validationRules[key]?.value)
                ) {
                    errors.push(`special character not allowed in ${key}`);
                }
                // condition for checking type = password
                else if (validationRules[key]?.type === "password") {
                    // condition for checking uppercase is present or not
                    if (!hasUppercase.test(validationRules[key]?.value)) {
                        errors.push(
                            `${key} should contain atleast one uppercase`
                        );
                    }
                    // condition for checking digit is present or not
                    else if (!hasDigit.test(validationRules[key]?.value)) {
                        errors.push(`${key} should contain atleast one number`);
                    }
                    // condition for checking special character is present or not
                    else if (
                        !hasSpecialChars.test(validationRules[key]?.value)
                    ) {
                        errors.push(
                            `${key} should contain atleast one special character`
                        );
                    }
                }
                // condition for checking type = number
                else if (
                    validationRules[key]?.type === "number" &&
                    !isDigit.test(validationRules[key]?.value)
                ) {
                    errors.push(`${key} should contain only numbers`);
                }
            });
        }

        return errors;
    };

    return validateStates();
}

module.exports = formValidator;
