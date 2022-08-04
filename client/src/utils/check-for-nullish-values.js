const checkForNullishValues = (arr) => {
  const trimmedValues = arr.map((val) => val.trim());
  const anyValuesFalsy = trimmedValues.some((val) => !val);
  const anyValuesLessThanZeroLength = trimmedValues.some(
    (val) => val.length < 1
  );
  return anyValuesFalsy || anyValuesLessThanZeroLength;
};

export default checkForNullishValues;
