function priceFormulaVarsovia(width, height, heightOfLamella) {
  return width * 2 + Math.floor(height / heightOfLamella) * 10 + 100;
}

function priceFormulaVarsoviaRamen(width, height, heightOfLamella) {
  return width * 2 + Math.floor(height / heightOfLamella) * 10 + 123;
}

function priceFormulaWilson(width, height) {
  return width * 2 + height * 3 + 100;
}

function priceFormulaWilsonRamen(width, height) {
  return width * 2 + height * 3 + 150;
}

function priceFormulaBarcelona(width, height) {
  return width * 2 + height * 3 + 169 + 23;
}

export function priceFormula(width, height, heightOfLamella, panelType) {
  switch (panelType) {
    case "panou-de-gard-varsovia":
      return priceFormulaVarsovia(width, height, heightOfLamella);
    case "panou-de-gard-varsovia-ramen":
      return priceFormulaVarsoviaRamen(width, height, heightOfLamella);

    case "panou-de-gard-wilson":
      return priceFormulaWilson(width, height);

    case "panou-de-gard-wilson-ramen":
      return priceFormulaWilsonRamen(width, height);

    case "panou-de-gard-barcelona":
      return priceFormulaBarcelona(width, height)

    default:
      return null;
  }
}
