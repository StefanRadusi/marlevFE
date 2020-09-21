export function calcNumberOfLamellaBarcelona(height, heightOfLamella) {
  if (isNaN(Number(height))) {
    return 1;
  }

  return Math.floor(height / heightOfLamella) - 1;
}

