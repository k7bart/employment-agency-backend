const errors = {
  ALREADY_REGISTERED: {
    code: "ALREADY_REGISTERED",
    message: "User with the specified email already exists.",
  },

  INCORRECT_CREDENTIALS: {
    code: "INCORRECT_CREDENTIALS",
    message: "Incorrect email or password.",
  },

  INTERNAL_SERVER_ERROR: {
    code: "INTERNAL_SERVER_ERROR",
  },

  NOT_FOUND: {
    code: "NOT_FOUND",
    message: "The requested URL was not found.",
  },

  UNAUTHORIZED: {
    code: "UNAUTHORIZED",
    message: "The requested URL requires user authorization.",
  },

  FIELD_CANNOT_BE_EMPTY: (field) => `The ${field} field cannot be empty.`,

  FIELD_CANNOT_BE_LONGER: (field, quantity) =>
    `The ${field} cannot be longer than ${quantity} symbol.`,

  FIELD_CANNOT_BE_SHORTER: (field, quantity) =>
    `The ${field} cannot be shorter than ${quantity}.`,

  FIELD_IS_NOT_OF_PROPER_FORMAT: (field) => validationErrors[field],
};

module.exports = errors;
