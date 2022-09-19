const joi = require("joi");

const {
  stringCheck,
  numberCheck,
  emailCheck,
  passwordCheck,
  booleanCheck,
  numberStringCheck,
  phoneNumberCheck,
  emailOrPhoneNumberField,
  editArrayStringCheck,
  validateAmount,
  arrayStringCheck,
  editStringCheck,
  editNumberCheck,
  stringCheckNotRequired,
  anyTypeCheck,
  editArrayObjectCheck,
} = require("../validationHelpers");

const signInAdminSchema = joi.object({
  email: emailCheck(),
  password: passwordCheck(),
});

const signUpAdminSchema = joi.object({
  username: stringCheck("Username"),
  email: emailCheck(),
  firstName: stringCheck("First Name"),
  lastname: stringCheck("Last Name"),
  password: passwordCheck(),
});

module.exports = {
  signUpAdminSchema,
  signInAdminSchema,
};
