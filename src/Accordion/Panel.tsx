import { useEffect, useRef } from "react";
import "./Panel.css";

interface PanelProps {
  title: string;
  children: React.ReactNode;
  setPanelOpen: (index: number) => void;
  panelIdx: number;
  open: boolean;
}

export default function Panel({
  title,
  children,
  setPanelOpen,
  panelIdx,
  open
}: PanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.style.maxHeight = open ? `${ref.current.scrollHeight}px` : "0";
  }, [open]);

  return (
    <div className="panel" data-testid="panel-wrap">
      <header
        data-testid="panel-header"
        onClick={() => {
          setPanelOpen(panelIdx);
        }}
      >
        <i className={`caret ${open ? "down" : "right"}`} />
        {title}
      </header>
      <main ref={ref} data-testid="panel-main" className={open ? "open" : ""}>
        {children}
      </main>
    </div>
  );
}
