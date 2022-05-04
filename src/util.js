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
export function processCommitData(d) {
  if (!Array.isArray(d)) return [];
  let res = d.map((obj, idx) => {
    return {
      idx: idx + 1,
      link: obj.html_url,
      title: obj.commit.message,
      who: obj?.author,
      date: obj.commit.committer.date
    };
  });
  return res;
}
