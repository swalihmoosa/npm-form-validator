const myformValidator = require("form-validator");

const validationRules = {
    name: {
        value: "swalih",
        required: true,
        type: "text",
        minLength: 4,
        maxLength: 10,
    },
    pwd: {
        value: "Swa",
        required: true,
        type: "password",
        minLength: 4,
        maxLength: 10,
    },
};

console.log("-------", myformValidator(validationRules));
