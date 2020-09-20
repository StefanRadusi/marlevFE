function priceFormulaVarsovia(width, height, heightOfLamella) {
  return width * 2 + Math.floor(height / heightOfLamella) * 10 + 100;
}

function priceFormulaWilson(width, height) {
  return width * 2 + height * 3 + 100;
}

export function priceFormula(width, height, heightOfLamella, panelType) {
  switch (panelType) {
    case "panou-de-gard-varsovia":
      return priceFormulaVarsovia(width, height, heightOfLamella);

    case "panou-de-gard-wilson":
      return priceFormulaWilson(width, height);

    default:
      return null;
  }
}
