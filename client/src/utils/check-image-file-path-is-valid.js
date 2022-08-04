const checkImageFilePathIsInvalid = (filePath) => {
  const fileExtensionStartIndex = filePath.indexOf('.');
  const fileExtension = filePath.slice(fileExtensionStartIndex + 1);

  if (
    fileExtension === 'png' ||
    fileExtension === 'jpg' ||
    fileExtension === 'jpeg'
  ) {
    return false;
  }

  return true;
};

export default checkImageFilePathIsInvalid;
