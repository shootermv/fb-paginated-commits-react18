import { useState } from "react";
import { formatMessage } from "./util";

export default function Message({ title, term, link = "" }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <a
        href={link}
        target={"_blank"}
        dangerouslySetInnerHTML={{
          __html: formatMessage(title, term, showMore)
        }}
      />
      {title.length > 100 && (
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? " less" : "...more"}
        </span>
      )}
    </>
  );
}
