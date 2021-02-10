const sheepCounter = (sheep) => {
  if (sheep === 0) {
    return 'All sheep jumped over the fence\n';
  }
  return `${sheep}: Another sheep jumps over the fence\n${sheepCounter(sheep - 1)}`;
};

const powerCalculator = (b, e) => {
  const base = parseInt(b, 10);
  const exp = parseInt(e, 10);

  if (exp < 0) {
    return 'exponent should be >= 0';
  }
  if (exp === 0) {
    return 1;
  }
  return base * powerCalculator(base, exp - 1);
};

const reverseString = (string) => {
  if (string.length === 1) {
    return string;
  }
  return string.slice(-1) + reverseString(string.slice(0, -1));
};

const triangularNumber = (nth) => {
  const nthInt = parseInt(nth, 10);
  if (nthInt === 1) {
    return 1;
  }
  return nthInt + (triangularNumber(nthInt - 1));
};

const splitString = (string, separator) => {
  if (!string.includes(separator)) {
    return [string];
  }
  const sepIndex = string.indexOf(separator);
  return [string.slice(0, sepIndex), ...splitString(string.slice(sepIndex + 1), separator)];
};

module.exports = {
  sheepCounter, powerCalculator, reverseString, triangularNumber, splitString,
};
