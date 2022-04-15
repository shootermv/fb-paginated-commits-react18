import { useState } from "react";
import { formatMessage } from "./util";

export default function Message({ title, term, link = "" }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="commit-message">
      <a
        href={link}
        target={"_blank"}
        data-testid="commit-message"
        dangerouslySetInnerHTML={{
          __html: formatMessage(title, term, showMore)
        }}
      />
      {title.length > 100 && (
        <span
          onClick={() => setShowMore(!showMore)}
          className="show-more"
          data-testid="show-more"
        >
          {showMore ? " less" : "...more"}
        </span>
      )}
    </div>
  );
}
