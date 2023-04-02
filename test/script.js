const myformValidator = require("form-validator");

const validationRules = {
    name: {
        value: "",
        required: false,
        type: "text",
        minLength: 4,
        maxLength: 10,
    },
    pwd: {
        value: "Swal%1",
        required: true,
        type: "password",
        minLength: 4,
        maxLength: 10,
    },
    mobile: {
        value: 8123,
        required: true,
        type: "number",
        minLength: 4,
        maxLength: 10,
    },
};

console.log("-------", myformValidator(validationRules));
