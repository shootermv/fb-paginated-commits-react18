import {Commit} from '../models/commit'
export function formatMessage(str: string, term: string, showMore: boolean) {
  if (term) {
    str = str.replace(
      new RegExp(term, "ig"),
      `<b style="color:red">${term}</b>`
    );
  }
  if (showMore) return str;
  return `${str.slice(0, 100)}`;
}
export function processCommitData(d: any) {
  if (!Array.isArray(d)) return [] as Commit[];
  let res = d.map((obj, idx) => {
    const {
      message: title,
      committer: { date },
    } = obj.commit;
    return {
      idx: idx + 1,
      link: obj.html_url,
      title,
      who: obj?.author,
      date,
    } as Commit;
  });
  return res;
}
