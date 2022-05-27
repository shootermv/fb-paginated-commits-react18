import "./style.css";
export default function DateCmp({ dt }) {
  return <time className="dt">{new Date(dt).toLocaleDateString("en-GB")}</time>;
}
