import { Children, cloneElement, ReactNode, useState } from "react";
import "./Accordion.css";

interface AccordionProps {
  children: ReactNode;
}

interface AccordionChildProps {
  open: boolean;
  setPanelOpen: (idx: number) => void;
  panelIdx: number;
}

export default function Accordion({ children }: AccordionProps) {
  const [panels, setPanels] = useState<boolean[]>(Children.map(children, () => false) as boolean[]);

  const setPanelOpen = (idx: number) => {
    setPanels(panels.map((p, _idx) => (_idx === idx ? !p : p)));
  };

  return (
    <div className="accordion">
      {Children.map(children, (child, idx) =>
        cloneElement(child as React.ReactElement<AccordionChildProps>, {
          open: panels[idx],
          setPanelOpen,
          panelIdx: idx
        })
      )}
    </div>
  );
}
