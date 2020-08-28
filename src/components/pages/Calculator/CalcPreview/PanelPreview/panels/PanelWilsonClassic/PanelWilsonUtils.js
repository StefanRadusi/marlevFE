export function calcNumberOfLamellaWillson(height, heightOfLamella) {
  if (isNaN(Number(height))) {
    return 1;
  }

  const noOfLamella = Math.floor(height / heightOfLamella);

  return noOfLamella;
}
