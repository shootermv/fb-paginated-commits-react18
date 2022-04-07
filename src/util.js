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