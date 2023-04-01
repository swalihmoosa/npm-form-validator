function formValidator() {
    const validationRules = {
        name: {
            value: "",
            required: true,
            type: "text",
            minLength: 4,
            maxLength: 10,
        },
    };

    const validateStates = () => {
        return Object.keys(validationRules).map((key) => {
            if (
                validationRules[key]?.required === true &&
                validationRules[key]?.value === ""
            ) {
                return `${key} is required`;
            }
        });
    };

    // validateStates();
    console.log(validateStates());
}

formValidator();
module.exports = formValidator;
