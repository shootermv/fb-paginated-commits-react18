import "./Panel.css";
export default function Panel({
  title,
  children,
  setPanelOpen,
  panelIdx,
  open
}) {
  return (
    <div className="panel" data-testid="panel-wrap">
      <header
        data-testid="panel-header"
        onClick={() => {
          setPanelOpen(panelIdx);
        }}
      >
        <i className="caret right" />
        {title}
      </header>
      <main data-testid="panel-main" className={open ? "open" : ""}>
        {children}
      </main>
    </div>
  );
}
