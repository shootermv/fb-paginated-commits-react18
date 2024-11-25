//import Accordion, { Panel } from "../Accordion";
import Accordion from "../Accordion/BetterAccordion";

import "./PullsList.css";
export default function PullsList({ pulls }: { pulls: any[] }) {
  return (
    <div className="pulls-container">
      <Accordion items={pulls} allowMultipleOpen={true} />
    </div>
  );
}
