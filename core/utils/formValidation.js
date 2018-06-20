const regexSet = {
  ruleRegex: /^(.+?)\[(.+)\]$/,
  numericRegex: /^[0-9]+$/,
  emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  integerRegex: /^\-?[0-9]+$/,
  alphaRegex: /^[a-zA-Z]+$/i,
  alphaNumericRegex: /^[a-zA-Z0-9]+$/i,
  phoneNumberRegex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
};

export const isBetween = (value, min, max) => {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length >= min && value.length <= max;
  } else if (typeof value === 'number') {
    return value >= min && value <= max;
  }
  return false;
};

export const isEmail = value => regexSet.emailRegex.test(value);
export const isInteger = value => regexSet.integerRegex.test(value);

export const isValidName = value => regexSet.alphaRegex.test(value) && value.length >= 3;

export const isValidPhoneNumber = value => regexSet.phoneNumberRegex.test(value);

export const isAlphaNum = value => regexSet.alphaNumericRegex.test(value) && value.length > 0;
