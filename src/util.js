export function formatMessage(str, term, showMore) {
  if (term) {
    str = str.replace(
      new RegExp(term, "ig"),
      `<b style="color:red">${term}</b>`
    );
  }
  if (showMore) return str;
  return `${str.slice(0, 100)}`;
}
export function processData(d) {
  if (!Array.isArray(d)) return [];
  let res = d.map((obj, idx) => {
    obj.idx = idx + 1;
    obj.link = obj.html_url;
    obj.title = obj.commit.message;
    obj.who = obj?.author?.avatar_url || "";
    obj.date = obj.commit.committer.date;
    return obj;
  });
  return res;
}
