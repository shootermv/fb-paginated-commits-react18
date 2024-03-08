import "./AuthorLink.css";
interface IAuthorLink {
  who: {
   login: string;
   avatar_url: string
  }
}
const AuthorLink: React.FC<IAuthorLink> = ({who}) => {
  return (
    <div>
      <a href={`https://github.com/${who.login}`} target="_blank">
        <img src={who.avatar_url} className="author-link" />
      </a>
    </div>
  );
}
export default AuthorLink