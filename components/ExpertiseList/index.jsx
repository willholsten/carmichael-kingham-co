import { Component } from "react";

// Resources
import MyLink from "../Common/MyLink";

// Styles
import styles from "./styles.scss";

export default class ExpertiseList extends Component {
  render() {
    const { expertise } = this.props;
    return (
      <div className={styles.ExpertiseList}>
        <ul>
          <h4>Quick links</h4>
          {expertise.map(expertise => (
            <li key={expertise.attributes.title}>
              <MyLink
                href={`/expertise/${expertise.slug}`}
                text={expertise.attributes.title}
                buttonType="secondary"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
