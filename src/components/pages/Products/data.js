import atena from "./images/atena.jpg";
import barcelona from "./images/barcelona.jpg";
import customized from "./images/customized.jpg";
import varsovia from "./images/varsovia.jpg";
import wilson from "./images/wilson.jpg";

export const productTabs = [
  { id: 1, name: "Panouri de gard", url: "#panouri" },
  { id: 2, name: "Porti acces", url: "#porti" },
  { id: 3, name: "Balustrade", url: "#balustrade" },
  { id: 4, name: "Confectii speciale", url: "#confectii" },
  { id: 5, name: "Mobilier", url: "#mobilier" },
  { id: 6, name: "Automatizari", url: "#automatizari" },
];

export const panouriGard = [
  {
    id: 1,
    name: "Wilson",
    path: "panou-de-gard-wilson",
    image: wilson,
    description:
      "Ansamblul Wilson este confectionat integral din aluminiu.Lamela Wilson se asambleaza mecanic in 45’ Ramele pentru panourile Ramen sau portile de acces sunt confectionate din teava rectangulara (duraluminiu 3/4 mm).",
  },
  {
    id: 2,
    name: "Barcelona",
    image: barcelona,
    path: "panou-de-gard-barcelona",
    description:
      "Ansamblul Barcelona este confectionat integral din aluminiu.\n" +
      "Lamela Barcelona se asambleaza mecanica, se poate monta blind (panou plin) sau cu luft dupa preferinta.\n" +
      "Ramele pentru panourile Ramen sau portile de acces sunt confectionate din teava rectangulara (duraluminiu 3/4 mm).",
  },
  {
    id: 3,
    name: "Varsovia",
    image: varsovia,
    path: "panou-de-gard-varsovia",
    description:
      "Ansamblul Varsovia este confectionat integral din aluminiu.\n" +
      "Lamela Varsovia se asambleaza mecanic.\n" +
      "Ramele pentru panourile Ramen sau portile de acces sunt confectionate din teava rectangulara (duraluminiu 3/4 mm).",
  },
  {
    id: 4,
    name: "Atena",
    image: atena,
    path: "panou-de-gard-atena",
    description:
      "Ansamblul Atena este confectionat integral din aluminiu.\n" +
      "Lamela Atena se asambleaza mecanica, se poate monta blind (panou plin) sau cu luft dupa preferinta.\n" +
      "Ramele pentru panourile Ramen sau portile de acces sunt confectionate din teava rectangulara (duraluminiu 3/4 mm).",
  },
  {
    id: 5,
    name: "Customized",
    path: "customized",
    image: customized,
    description: "",
  },
];
