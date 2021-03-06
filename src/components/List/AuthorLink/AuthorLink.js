import "./AuthorLink.css";
export default function AuthorLink({ who }) {
  return (
    <div>
      <a href={`https://github.com/${who.login}`} target="_blank">
        <img src={who.avatar_url} className="author-link" />
      </a>
    </div>
  );
}
