// Data
import content from "../../../content/navigation.md";

export default function SocialButtons() {
  let {
    attributes: { connect }
  } = content;
  return (
    <div>
      {connect.map(company => (
        <a href={company.href} target="_blank" key={company.label}>
          <i className={company.icon}></i>
        </a>
      ))}
    </div>
  );
}
