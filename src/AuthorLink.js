export default function AuthorLink({ who }) {
  return (
    <a href={`https://github.com/${who.login}`} target="_blank">
      <img
        src={who.avatar_url}
        style={{ borderRadius: "50%", height: "22px" }}
      />
    </a>
  );
}
