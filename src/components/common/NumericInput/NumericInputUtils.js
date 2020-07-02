export function isNumber(value) {
  if (isNaN(Number(value))) return false;

  return true;
}
