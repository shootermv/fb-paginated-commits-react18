import { useState } from "react";

function formatMessage(str, term, showMore) {
  if (term) {
    str = str.replace(
      new RegExp(term, "ig"),
      `<b style="color:red">${term}</b>`
    );
  }
  if (showMore) return str;
  return `${str.slice(0, 100)}`;
}
export default function Message({ title, term, link = "" }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {" "}
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
