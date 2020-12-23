import constants from './constants';

export function checkFileSize(file) {
  let valid = true;
  if (file) {
    const size = file.size / 1024 / 1024;
    if (size > 1) {
      valid = false;
    }
  }
  return valid;
}

export function checkMimeType(file) {
  let valid = true;
  if (file) {
    if (!constants.SUPPORTED_FORMATS.includes(file.type)) {
      valid = false;
    }
  }
  return valid;
}
