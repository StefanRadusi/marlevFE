import { useEffect, useState } from "react";
import { mockRequest } from "./data";

export function useGetPanel(panelName) {
  const [panel, setPanel] = useState({});

  useEffect(() => {
    mockRequest(panelName).then((json) => setPanel(json));
  }, [panelName]);

  return panel;
}

export function getTitleName(panelName) {
  switch (panelName) {
    case "panou-gard-wilson-clasic":
      return "Panou gard wilson clasic";

    default:
      return "";
  }
}
