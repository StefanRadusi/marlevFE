export function calcNumberOfLamellaBarcelonaRamen(height, heightOfLamella) {
  if (isNaN(Number(height))) {
    return 1;
  }

  return Math.floor(height / heightOfLamella) - 1;
}

