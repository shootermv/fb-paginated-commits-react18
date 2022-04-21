import "./style.css";
export default function DateCmp({ dt }) {
  return <div className="dt">{new Date(dt).toLocaleDateString("en-GB")}</div>;
}
