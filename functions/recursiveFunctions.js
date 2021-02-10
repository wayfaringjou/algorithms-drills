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

module.exports = { sheepCounter, powerCalculator, reverseString };
