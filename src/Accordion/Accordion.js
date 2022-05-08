import { Children, cloneElement, useState } from "react";
import "./Accordion.css";
export default function Accordion({ children }) {
  const [panels, setPanels] = useState(Children.map(children, () => false));
  const setPanelOpen = (idx) => {
    setPanels(panels.map((p, _idx) => _idx === idx && !p));
  };
  return (
    <div className="accordion">
      {Children.map(children, (child, idx) =>
        cloneElement(child, {
          open: panels[idx],
          setPanelOpen,
          panelIdx: idx
        })
      )}
    </div>
  );
}
