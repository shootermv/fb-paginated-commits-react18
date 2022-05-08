import Accordion, { Panel } from "../Accordion";

import { marked } from "marked";
import "./PullsList.css";
export default function PullsList({ pulls }) {
  return (
    <Accordion>
      {pulls.map((pr) => {
        return (
          <Panel key={pr.id} title={pr.title}>
            <div dangerouslySetInnerHTML={{ __html: marked(pr.body) }} />
          </Panel>
        );
      })}
    </Accordion>
  );
}
