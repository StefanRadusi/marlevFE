export function calcNumberOfLamellaVarsovia(height, heightOfLamella) {
  if (isNaN(Number(height))) {
    return 1;
  }

  return Math.floor(height / heightOfLamella) - 1;
}

export function calcLamelaHeight(currentIndex, arrayLength, heightOfLamella) {
  if (currentIndex === 0 || currentIndex + 1 === arrayLength) {
    return heightOfLamella * 500 + 24;
  } else {
    return heightOfLamella * 500;
  }
}
